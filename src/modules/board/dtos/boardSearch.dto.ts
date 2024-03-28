import { IsEmpty, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { BoardSearchEnum } from '../types/boardSearch.type';

export class BoardSearchDTO {
  @IsEnum(BoardSearchEnum)
  @IsNotEmpty()
  type?: BoardSearchEnum;

  @IsString()
  @IsNotEmpty()
  content?: string;
}
