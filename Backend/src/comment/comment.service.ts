import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
//import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Post } from 'src/post/entities/post.schema';
import { User } from 'src/user/entities/user.schema';
import { Comment } from './entities/comment.schema';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<Post>,
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Comment.name) private commentModel: Model<Comment>,
  ) {}
  async createComment(
    createCommentDto: CreateCommentDto,
    author: User,
    postId: string,
  ): Promise<Comment> {
    const postObjectId = new Types.ObjectId(postId);

    // Create the comment
    const newComment = new this.commentModel({
      ...createCommentDto,
      author,
      post: postObjectId,
    });
    const savedComment = await newComment.save();

    // Add the comment to the post's comments array
    await this.postModel.findByIdAndUpdate(postObjectId, {
      $push: { comments: savedComment },
    });

    return savedComment;
  }

  findAll() {
    return `This action returns all comment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  // update(id: number, updateCommentDto: UpdateCommentDto) {
  //   return `This action updates a #${id} comment`;
  // }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
