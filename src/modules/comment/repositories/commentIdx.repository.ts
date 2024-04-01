import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CommentIdx } from '../entities/commentIdx.entity';

@Injectable()
export class CommentIdxRepository {
  constructor(
    @InjectRepository(CommentIdx)
    private commentIdxRepository: Repository<CommentIdx>,
  ) {}

  async find(options) {
    return await this.commentIdxRepository.find(options);
  }

  async search(options) {
    console.log('idx');
    const { text } = options;
    const whereClause = {};
    if (text) {
      whereClause[text] = Like(`${text}%`);
    }
    return await this.commentIdxRepository.find({
      where: {},
      order: { text: 'asc' },
    });
  }

  async findOne(options) {
    return await this.commentIdxRepository.findOne(options);
  }

  async query(options) {
    return await this.commentIdxRepository.query(options);
  }
}
