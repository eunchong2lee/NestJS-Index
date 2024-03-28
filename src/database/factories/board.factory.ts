import { setSeederFactory } from 'typeorm-extension';
import { Board } from '../../modules/board/entities/board.entity';

export const BoardFactory = setSeederFactory(Board, (faker) => {
  const board = new Board();
  board.title = faker.lorem.word(6);
  board.content = faker.lorem.words(10);

  return board;
});
