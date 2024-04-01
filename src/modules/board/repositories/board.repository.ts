import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Board } from '../entities/board.entity';

@Injectable()
export class BoardRepository {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async search(options) {
    const { type, content } = options;
    const whereClause = {};
    if (content) {
      whereClause[type] = Like(`%${content}%`);
    }

    return await this.boardRepository.find({ where: whereClause });
  }

  async find(options) {
    return await this.boardRepository.find(options);
  }

  async findOne(options) {
    return await this.boardRepository.findOne(options);
  }

  async query(options) {
    return await this.boardRepository.query(options);
  }
}
