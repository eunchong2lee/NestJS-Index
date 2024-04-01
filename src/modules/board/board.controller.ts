import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './entities/board.entity';
import { BoardSearchDTO } from './dtos/boardSearch.dto';
import { BoardIdx } from './entities/boardIdx.entity';

@Controller('boards')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  async findAll(): Promise<Board[]> {
    return await this.boardService.findAll();
  }

  @Get('/search')
  async search(@Query() boardSearchDto: BoardSearchDTO): Promise<Board[]> {
    return await this.boardService.search(boardSearchDto);
  }

  @Get('/idx/search')
  async searchIdx(
    @Query() boardSearchDto: BoardSearchDTO,
  ): Promise<BoardIdx[]> {
    return await this.boardService.searchIdx(boardSearchDto);
  }
}
