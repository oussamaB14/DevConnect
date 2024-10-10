import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
//import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(@InjectRepository(Post) private postRepo: Repository<Post>) {}
  create(createPostDto: CreatePostDto) {
    const post = this.postRepo.create(createPostDto);
    return this.postRepo.save(post);
  }
  findAll() {
    return this.postRepo.find();
  }

  findOne(id: number) {
    return this.postRepo.findOne({ where: { id } });
  }

  // update(id: number, updatePostDto: UpdatePostDto) {
  //   return `This action updates a #${id} post`;
  // }

  async remove(id: number): Promise<void> {
    await this.postRepo.delete(id);
  }
}
