import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/commment.entity';

@Injectable()
export class CommentRepository {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  async findAll(options) {
    return await this.commentRepository.find(options);
  }

  async findOne(options) {
    return await this.commentRepository.findOne(options);
  }

  async query(options) {
    return await this.commentRepository.query(options);
  }
}
