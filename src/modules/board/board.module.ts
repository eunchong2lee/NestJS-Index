import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { BoardRepository } from './repositories/board.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './entities/board.entity';
import { BoardIdx } from './entities/boardIdx.entity';
import { BoardIdxRepository } from './repositories/boardIdx.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Board, BoardIdx])],
  controllers: [BoardController],
  providers: [BoardService, BoardRepository, BoardIdxRepository],
})
export class BoardModule {}
