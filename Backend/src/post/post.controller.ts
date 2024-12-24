import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Request,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { AuthGuard } from 'src/auth/guards/Auth-Guard';
import { Public } from 'src/auth/decorators/public.decorator';
import { Types } from 'mongoose';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('all-posts')
  @Public()
  findAll() {
    return this.postService.findAll();
  }
  @Get('user-posts/:id')
  findByUserId(@Param('id') id: string) {
    return this.postService.findByUserId(id);
  }
  @Post('bookmark/:id')
  @UseGuards(AuthGuard)
  async bookmarkPost(@Param('id') postId: string, @Request() req) {
    if (!req.user) {
      throw new UnauthorizedException('User not authenticated');
    }

    const userId = req.user._id;

    try {
      await this.postService.bookmarkPost(userId, postId);
      return { message: 'Post bookmarked successfully' }; // Return a success message
    } catch (error) {
      throw new BadRequestException(error.message || 'Failed to bookmark post');
    }
  }
  @Delete('bookmark/:id')
  @UseGuards(AuthGuard)
  async removeBookmark(@Param('id') postId: string, @Request() req) {
    if (!req.user) {
      throw new UnauthorizedException('User not authenticated');
    }

    const userId = req.user._id;

    try {
      // Make sure postId is valid
      if (!Types.ObjectId.isValid(postId)) {
        throw new BadRequestException('Invalid post ID format');
      }

      await this.postService.removeBookmark(userId, postId);
      return { message: 'Post removed from bookmarks successfully' }; // Return a success message
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Failed to remove bookmark',
      );
    }
  }
  @Delete(':id')
  @UseGuards(AuthGuard)
  async deletePost(@Param('id') postId: string, @Request() req) {
    if (!req.user) {
      throw new UnauthorizedException('User not authenticated');
    }

    const userId = req.user._id;

    try {
      // Make sure postId is valid
      if (!Types.ObjectId.isValid(postId)) {
        throw new BadRequestException('Invalid post ID format');
      }

      await this.postService.deletePost(postId, userId);
      return { message: 'Post deleted successfully' }; // Return a success message
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Failed to delete the post',
      );
    }
  }

  @UseGuards(AuthGuard)
  @Post('add')
  async create(@Body() createPostDto: CreatePostDto, @Request() req) {
    if (!req.user) {
      throw new UnauthorizedException('User not authenticated');
    }
    const author = req.user;
    return this.postService.create(createPostDto, author);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
  //   return this.postService.update(+id, updatePostDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }

  @UseGuards(AuthGuard)
  @Post('like/:id')
  async likePost(@Param('id') postId: string, @Request() req) {
    if (!req.user) {
      throw new UnauthorizedException('User not authenticated');
    }

    const userId = req.user._id;

    try {
      await this.postService.likePost(userId, postId);
      return { message: 'Post liked successfully' };
    } catch (error) {
      throw new BadRequestException(error.message || 'Failed to like post');
    }
  }

  @UseGuards(AuthGuard)
  @Delete('like/:id')
  async unlikePost(@Param('id') postId: string, @Request() req) {
    if (!req.user) {
      throw new UnauthorizedException('User not authenticated');
    }

    const userId = req.user._id;

    try {
      await this.postService.unlikePost(userId, postId);
      return { message: 'Post unliked successfully' };
    } catch (error) {
      throw new BadRequestException(error.message || 'Failed to unlike post');
    }
  }
}
