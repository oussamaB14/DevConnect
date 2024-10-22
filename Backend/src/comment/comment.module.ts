import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from 'src/post/entities/post.schema';
import { User, UserSchema } from 'src/user/entities/user.schema';
import { CommentSchema } from './entities/comment.schema';
import { Comment } from './entities/comment.schema';
import { PostModule } from 'src/post/post.module';
import { UserModule } from 'src/user/user.module';
import { AuthModule } from 'src/auth/auth.module';
import { AuthGuard } from 'src/auth/guards/Auth-Guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';
import { GoogleAuthGuard } from 'src/auth/guards/google-auth/google-auth.guard';
@Module({
  controllers: [CommentController],
  providers: [CommentService, AuthGuard, JwtAuthGuard, GoogleAuthGuard],
  exports: [CommentService],
  imports: [
    PostModule,
    UserModule,
    AuthModule,
    MongooseModule.forFeature([
      { name: Comment.name, schema: CommentSchema },
      { name: Post.name, schema: PostSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
})
export class CommentModule {}
