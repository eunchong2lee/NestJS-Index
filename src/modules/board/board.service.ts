import { Injectable } from '@nestjs/common';
import { BoardRepository } from './repositories/board.repository';
import { BoardSearchDTO } from './dtos/boardSearch.dto';
import { BoardIdxRepository } from './repositories/boardIdx.repository';

@Injectable()
export class BoardService {
  constructor(
    private readonly boardRepository: BoardRepository,
    private readonly boardIdxRepository: BoardIdxRepository,
  ) {}

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
