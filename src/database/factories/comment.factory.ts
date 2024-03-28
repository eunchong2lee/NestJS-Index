import { setSeederFactory } from 'typeorm-extension';
import { Comment } from '../../modules/comment/entities/comment.entity';

export const CommentFactory = setSeederFactory(Comment, (faker) => {
  const comment = new Comment();
  comment.text = faker.lorem.words(20);

  return comment;
});
