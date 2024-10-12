import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
//import { UpdateUserDto } from './dto/update-user.dto';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
import { User } from './entities/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async updateHashedRefreshToken(userId: string, hashedRefreshToken: string) {
    const user = await this.userModel.findById(userId);
    if (!user) return null;
    user.hashedRefreshToken = hashedRefreshToken;
    return await user.save();
  }

  async create(createUserDto: CreateUserDto) {
    const user = await this.userModel.create(createUserDto);
    return await user.save();
  }

  async findByEmail(email: string) {
    return await this.userModel.findOne({ email: email });
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: string) {
    return this.userModel.findOne({ _id: id });
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
  async updateUserPosts(userId: string, postId: string) {
    await this.userModel.findByIdAndUpdate(userId, {
      $addToSet: { posts: postId },
    });
  }
}
