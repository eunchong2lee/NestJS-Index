import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentRepository {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  async find(options) {
    return await this.commentRepository.find(options);
  }

  async search(options) {
    return await this.commentRepository.find(options);
  }

  async findOne(options) {
    return await this.commentRepository.findOne(options);
  }

  async query(options) {
    return await this.commentRepository.query(options);
  }
}
