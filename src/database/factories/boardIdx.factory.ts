import { setSeederFactory } from 'typeorm-extension';
import { BoardIdx } from '../../modules/board/entities/boardIdx.entity';

export const BoardFactory = setSeederFactory(BoardIdx, (faker) => {
  const boardIdx = new BoardIdx();
  boardIdx.title = faker.lorem.word(6);
  boardIdx.content = faker.lorem.words(10);

  return boardIdx;
});
