import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './entities/commment.entity';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async findAll(): Promise<Comment[]> {
    return await this.commentService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Comment> {
    return await this.commentService.findOne();
  }
}
