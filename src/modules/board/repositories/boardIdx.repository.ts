import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { BoardIdx } from '../entities/boardIdx.entity';

@Injectable()
export class BoardIdxRepository {
  constructor(
    @InjectRepository(BoardIdx)
    private boardIdxRepository: Repository<BoardIdx>,
  ) {}

  async search(options) {
    const { type, content } = options;
    const whereClause = {};

    if (content) {
      whereClause[type] = Like(`%${content}%`);
    }

    return await this.boardIdxRepository.find({ where: whereClause });
  }

  async find(options) {
    return await this.boardIdxRepository.find(options);
  }

  async findOne(options) {
    return await this.boardIdxRepository.findOne(options);
  }

  async query(options) {
    return await this.boardIdxRepository.query(options);
  }
}
