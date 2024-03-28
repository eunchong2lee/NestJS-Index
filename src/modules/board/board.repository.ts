import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardRepository {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

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
