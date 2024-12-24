import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
@Schema({ timestamps: true })
export class Comment extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  author: Types.ObjectId; // The user who made the comment

  @Prop({ type: Types.ObjectId, ref: 'Post', required: true })
  post: Types.ObjectId; // The post the comment is associated with

  @Prop({ required: true })
  content: string; // The content of the comment
}
export const CommentSchema = SchemaFactory.createForClass(Comment);
