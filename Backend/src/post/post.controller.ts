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
import { AuthGuard } from 'src/auth/guards/Auth-Guard';
import { Public } from 'src/auth/decorators/public.decorator';

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
}
