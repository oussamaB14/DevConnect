import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { Post, PostSchema } from './entities/post.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from 'src/user/user.module';
import { AuthModule } from 'src/auth/auth.module';
import { AuthGuard } from 'src/auth/guards/Auth-Guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';
import { GoogleAuthGuard } from 'src/auth/guards/google-auth/google-auth.guard';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    UserModule,
    AuthModule,
  ],
  controllers: [PostController],
  providers: [PostService, AuthGuard, JwtAuthGuard, GoogleAuthGuard],
  exports: [PostService],
})
export class PostModule {}
