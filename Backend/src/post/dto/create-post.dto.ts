import { IsEnum, IsString } from 'class-validator';
import { PostType } from '../enums/postType.enum';

export class CreatePostDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly content: string;

  @IsEnum(PostType)
  readonly type: PostType;

  @IsString()
  readonly authorId: string;
}
