import { Injectable } from '@nestjs/common';
import { BoardRepository } from './board.repository';
import { BoardSearchDTO } from './dtos/boardSearch.dto';

@Injectable()
export class BoardService {
  constructor(private readonly boardRepository: BoardRepository) {}

  async findAll() {
    const options = '';
    return await this.boardRepository.find(options);
  }

  async search(boardSearchDto: BoardSearchDTO) {
    return await this.boardRepository.search(boardSearchDto);
  }

  async findOne() {
    let options;
    return await this.boardRepository.findOne(options);
  }
}
