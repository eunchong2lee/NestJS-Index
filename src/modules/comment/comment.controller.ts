import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './entities/comment.entity';
import { CommentSearchDTO } from './dtos/commentSearch.dto';
import { CommentIdx } from './entities/commentIdx.entity';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async findAll(): Promise<Comment[]> {
    return await this.commentService.findAll();
  }

  @Get('/search')
  async search(
    @Query() commentSearchDto: CommentSearchDTO,
  ): Promise<Comment[]> {
    return await this.commentService.search(commentSearchDto);
  }

  @Get('/Idx/search')
  async searchIdx(
    @Query() commentSearchDto: CommentSearchDTO,
  ): Promise<CommentIdx[]> {
    return await this.commentService.searchIdx(commentSearchDto);
  }
}
