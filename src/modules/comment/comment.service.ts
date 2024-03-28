import { Injectable } from '@nestjs/common';
import { CommentRepository } from './comment.repository';

@Injectable()
export class CommentService {
  constructor(private readonly commentRepository: CommentRepository) {}

  async findAll() {
    let options;
    return await this.commentRepository.find(options);
  }

  async findOne() {
    let options;
    return await this.commentRepository.findOne(options);
  }
}
