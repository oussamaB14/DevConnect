import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
//import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.schema';

import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User } from 'src/user/entities/user.schema';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<Post>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}
  // create(createPostDto: CreatePostDto) {
  //   const post = this.postRepo.create(createPostDto);
  //   return this.postRepo.save(post);
  // }
  async create(createPostDto: CreatePostDto, authorId: string): Promise<Post> {
    // Create the post
    const author = { _id: authorId }; // Create an author object with the correct type

    const createdPost = new this.postModel({ ...createPostDto, author });
    const savedPost = await createdPost.save();
    // Update the user's posts array
    await this.updateUserPosts(authorId, savedPost._id as string);

    return savedPost;
  }
  async updateUserPosts(userId: string, postId: string) {
    await this.userModel.findByIdAndUpdate(userId, {
      $addToSet: { posts: postId },
    });
  }
  findAll() {
    return this.postModel.find();
  }

  findOne(id: number) {
    return this.postModel.findOne({ where: { id } });
  }

  // update(id: number, updatePostDto: UpdatePostDto) {
  //   return `This action updates a #${id} post`;
  // }
  async findByUserId(userId: string): Promise<Post[]> {
    console.log('User ID received:', userId);
    const id = userId.replace('id=', '');
    return this.userModel.findById(id).then((user) => {
      if (!user) {
        return [];
      }
      return this.postModel
        .find({ _id: { $in: user.posts } })
        .exec()
        .then((posts) => {
          console.log('Found posts:', posts);
          return posts;
        });
    });
  }
  async bookmarkPost(userId: string, postId: string): Promise<void> {
    try {
      const result = await this.userModel.findByIdAndUpdate(
        userId,
        { $addToSet: { bookmarks: postId } }, // Add the postId to the bookmarks array
        { new: true }, // Return the updated document
      );

      if (!result) {
        console.log('User not found or update failed');
        throw new Error('User not found or update failed');
      }

      console.log('Post bookmarked successfully:', postId);
    } catch (error) {
      console.error('Error bookmarking post:', error.message);
      throw new Error('Could not bookmark post');
    }
  }
  async removeBookmark(userId: string, postId: string): Promise<void> {
    try {
      const result = await this.userModel.findByIdAndUpdate(
        userId,
        { $pull: { bookmarks: postId } }, // Remove the postId from the bookmarks array
        { new: true }, // Return the updated document
      );

      if (!result) {
        console.log('User not found or update failed');
        throw new Error('User not found or update failed');
      }

      console.log('Post removed from bookmarks successfully:', postId);
    } catch (error) {
      console.error('Error removing post from bookmarks:', error.message);
      throw new Error('Could not remove post from bookmarks');
    }
  }

  async deletePost(postId: string, userId: string): Promise<void> {
    try {
      // Convert the postId to ObjectId
      const objectId = new Types.ObjectId(postId);

      // Delete the post from the posts collection
      const deletedPost = await this.postModel.findByIdAndDelete(objectId);

      if (!deletedPost) {
        console.log('Post not found or already deleted');
        throw new Error('Post not found or already deleted');
      }

      // Remove the post reference from the user's posts array
      const updatedUser = await this.userModel.findByIdAndUpdate(
        userId,
        {
          $pull: { posts: objectId }, // Remove the post ID from the user's posts array
        },
        { new: true }, // Return the updated document
      );

      if (!updatedUser) {
        console.log('User not found or update failed');
        throw new Error('User not found or update failed');
      }

      console.log('Post deleted successfully:', postId);
      console.log('Updated user posts array:', updatedUser.posts);
    } catch (error) {
      console.error('Error deleting post:', error.message);
      throw new Error('Could not delete the post');
    }
  }

  async remove(id: number): Promise<void> {
    const post = await this.postModel.findOne({ where: { id } });
    await post.deleteOne();
  }

  async likePost(userId: any, postId: string) {
    try {
      if (!Types.ObjectId.isValid(postId)) {
        throw new Error('Invalid post ID format');
      }

      const post = await this.postModel.findById(postId);

      if (!post) {
        throw new Error('Post not found');
      }

      if (post.likes.includes(userId)) {
        throw new Error('Post already liked by user');
      }

      post.likes.push(userId);

      await post.save();

      return { message: 'Post liked successfully' };
    } catch (error) {
      console.error('Error liking post:', error.message);
      throw new Error('Could not like post');
    }
  }

  async unlikePost(userId: any, postId: string) {
    try {
      if (!Types.ObjectId.isValid(postId)) {
        throw new Error('Invalid post ID format');
      }

      const post = await this.postModel.findById(postId);

      if (!post) {
        throw new Error('Post not found');
      }

      if (!post.likes.includes(userId)) {
        throw new Error('Post not liked by user');
      }

      post.likes = post.likes.filter((id) => id !== userId);

      await post.save();

      return { message: 'Post unliked successfully' };
    } catch (error) {
      console.error('Error unliking post:', error.message);
      throw new Error('Could not unlike post');
    }
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    try {
      const post = await this.postModel.findOne({ where: { id } });
      if (!post) {
        throw new Error('Post not found');
      }
      post.title = updatePostDto.title;
      post.content = updatePostDto.content;
      await post.save();
      return post;
    } catch (error) {
      console.error('Error updating post:', error.message);
      throw new Error('Could not update post');
    }
  }
}
