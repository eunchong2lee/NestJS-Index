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

//https://velog.io/@gkqkehs7/typeorm-extension%EC%9C%BC%EB%A1%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-seeding
