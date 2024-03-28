import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './entities/commment.entity';
import { CommentSearchDTO } from './dtos/commentSearch.dto';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async findAll(
    @Query() commentSearchDto: CommentSearchDTO,
  ): Promise<Comment[]> {
    return await this.commentService.findAll(commentSearchDto);
  }

  @Get('/:id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Comment> {
    return await this.commentService.findOne();
  }
}
