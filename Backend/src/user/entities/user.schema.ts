import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Role } from 'src/auth/enums/role.enum';
import { Post } from 'src/post/entities/post.schema';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: null })
  avatarUrl: string;

  @Prop({ default: null })
  bio: string;

  @Prop({ default: null })
  position: string;

  @Prop({ type: [String], default: [] })
  followers: string[];

  @Prop({ default: 0 })
  following: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Post' }] })n
  bookmarks: Types.ObjectId[] | Post[];

  @Prop({ type: String, default: null })
  hashedRefreshToken: string;

  @Prop({ default: null })
  location: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Post' }] })
  posts: Types.ObjectId[] | Post[];

  @Prop({ type: String, enum: Role, default: Role.USER })
  role: Role;

  // Password hashing middleware
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
export const UserSchema = SchemaFactory.createForClass(User);

// Middleware to hash password before saving
UserSchema.pre<User>('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});
