import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { CommentRepository } from './repositories/comment.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { CommentIdx } from './entities/commentIdx.entity';
import { CommentIdxRepository } from './repositories/commentIdx.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, CommentIdx])],
  controllers: [CommentController],
  providers: [CommentService, CommentRepository, CommentIdxRepository],
})
export class CommentModule {}
