import { IsEnum, IsObject, IsString } from 'class-validator';
import { PostType } from '../enums/postType.enum';
//import { User } from 'src/user/entities/user.schema';

export class CreatePostDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly content: string;

  @IsEnum(PostType)
  readonly type: PostType;

  @IsObject()
  readonly author: any;
}
