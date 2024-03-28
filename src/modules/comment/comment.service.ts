import { Injectable } from '@nestjs/common';
import { CommentRepository } from './comment.repository';

@Injectable()
export class CommentService {
  constructor(private readonly commentRepository: CommentRepository) {}

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
