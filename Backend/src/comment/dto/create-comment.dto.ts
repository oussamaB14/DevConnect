import { IsObject, IsString } from 'class-validator';
import { User } from 'src/user/entities/user.schema';

export class CreateCommentDto {
  @IsString()
  readonly content: string;
  @IsObject()
  readonly author: User;
}
