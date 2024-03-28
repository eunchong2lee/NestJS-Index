import { Injectable } from '@nestjs/common';
import { BoardRepository } from './board.repository';

@Injectable()
export class BoardService {
  constructor(private readonly boardRepository: BoardRepository) {}

  async findAll() {
    let options;
    return await this.boardRepository.find(options);
  }

  async findOne() {
    let options;
    return await this.boardRepository.findOne(options);
  }
}
