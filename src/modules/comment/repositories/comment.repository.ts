import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Comment } from '../entities/comment.entity';

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
    console.log('normal');
    const { text } = options;
    const whereClause = {};
    if (text) {
      whereClause[text] = Like(`${text}%`);
    }
    return await this.commentRepository.find({
      where: {},
      order: { text: 'asc' },
    });
  }

  async findOne(options) {
    return await this.commentRepository.findOne(options);
  }

  async query(options) {
    return await this.commentRepository.query(options);
  }
}
