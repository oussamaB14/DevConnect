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
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';
//import { GoogleAuthGuard } from 'src/auth/guards/google-auth/google-auth.guard';
//import { UpdatePostDto } from './dto/update-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}
  //@UseGuards(GoogleAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Post('add')
  async create(@Body() createPostDto: CreatePostDto, @Request() req) {
    if (!req.user) {
      throw new UnauthorizedException('User not authenticated');
    }
    const author = req.user;
    return this.postService.create(createPostDto, author);
  }

  @Get('all-posts')
  findAll() {
    return this.postService.findAll();
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
}
