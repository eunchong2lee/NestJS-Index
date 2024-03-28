import { IsNotEmpty, IsString } from 'class-validator';

export class CommentSearchDTO {
  @IsString()
  @IsNotEmpty()
  text: string;
}
