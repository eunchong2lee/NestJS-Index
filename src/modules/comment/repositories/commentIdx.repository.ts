import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
    return await this.commentIdxRepository.find(options);
  }

  async findOne(options) {
    return await this.commentIdxRepository.findOne(options);
  }

  async query(options) {
    return await this.commentIdxRepository.query(options);
  }
}
