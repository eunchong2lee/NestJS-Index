import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './entities/commment.entity';
import { CommentSearchDTO } from './dtos/commentSearch.dto';

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

  @Get('/:id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Comment> {
    return await this.commentService.findOne();
  }
}
