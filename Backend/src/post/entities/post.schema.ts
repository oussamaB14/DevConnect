import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/user/entities/user.schema';
import { PostType } from '../enums/postType.enum';

@Schema({ timestamps: true })
export class Post extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  author: Types.ObjectId | User;

  @Prop({ type: [String], default: [] })
  likes: string[];

  @Prop({ type: [String], default: [] })
  shares: string[];

  @Prop({ type: [String], default: [] })
  media: string[];

  @Prop({ type: String, default: null })
  linkUrl: string;

  @Prop({ type: String, enum: PostType, default: PostType.POST })
  type: PostType;
}

export const PostSchema = SchemaFactory.createForClass(Post);
