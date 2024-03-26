import { Seeder } from 'nestjs-seeder';
import { BoardRepository } from '../../modules/board/board.repository';

export default class BoardSeeder implements Seeder {
  constructor(private readonly boardRepository: BoardRepository) {}

  async seed(): Promise<any> {
    return;
  }

  async drop(): Promise<any> {
    return;
  }
}
