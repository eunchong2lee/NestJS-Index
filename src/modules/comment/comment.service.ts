import { Injectable } from '@nestjs/common';
import { CommentRepository } from './repositories/comment.repository';
import { CommentIdxRepository } from './repositories/commentIdx.repository';

@Injectable()
export class CommentService {
  constructor(
    private readonly commentRepository: CommentRepository,
    private readonly commentIdxRepository: CommentIdxRepository,
  ) {}

  async findAll() {
    const options = '';
    return await this.commentRepository.find(options);
  }

  async search(commentSearchDto) {
    return await this.commentRepository.search(commentSearchDto);
  }

  async findOne() {
    let options;
    return await this.commentRepository.findOne(options);
  }
}
