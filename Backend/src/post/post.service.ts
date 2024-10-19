import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
//import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.schema';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/entities/user.schema';

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
  async remove(id: number): Promise<void> {
    const post = await this.postModel.findOne({ where: { id } });
    await post.deleteOne();
  }
}
