import { setSeederFactory } from 'typeorm-extension';
import { CommentIdx } from '../../modules/comment/entities/commentIdx.entity';

export const CommentIdxFactory = setSeederFactory(CommentIdx, (faker) => {
  const commentIdx = new CommentIdx();
  commentIdx.text = faker.lorem.words(20);

  return commentIdx;
});
