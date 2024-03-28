import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Board } from '../../modules/board/entities/board.entity';
import { Comment } from '../../modules/comment/entities/comment.entity';
import { User } from '../../modules/user/entities/user.entity';
import { faker } from '@faker-js/faker';
import { BoardIdx } from '../../modules/board/entities/boardIdx.entity';
import { CommentIdx } from '../../modules/comment/entities/commentIdx.entity';
import { UserIdx } from '../../modules/user/entities/userIdx.entity';

export class MainSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const boardRepository = dataSource.getRepository(Board);
    const commentRepository = dataSource.getRepository(Comment);

    const boardIdxRepository = dataSource.getRepository(BoardIdx);
    const commentIdxRepository = dataSource.getRepository(CommentIdx);

    const userFactory = factoryManager.get(User);
    const boardFactory = factoryManager.get(Board);
    const commentFactory = factoryManager.get(Comment);

    const userIdxFactory = factoryManager.get(UserIdx);
    const boardIdxFactory = factoryManager.get(BoardIdx);
    const commentIdxFactory = factoryManager.get(CommentIdx);

    const users = await userFactory.saveMany(70);

    const userIdxs = await userIdxFactory.saveMany(70);

    const boardIdxs = await Promise.all(
      Array(30000)
        .fill('')
        .map(async () => {
          const made = await boardIdxFactory.make({
            userIdx: faker.helpers.arrayElement(userIdxs),
          });
          return made;
        }),
    );

    const commentIdxs = await Promise.all(
      Array(100000)
        .fill('')
        .map(async () => {
          const made = await commentIdxFactory.make({
            userIdx: faker.helpers.arrayElement(userIdxs),
            boardIdx: faker.helpers.arrayElement(boardIdxs),
          });
          return made;
        }),
    );
    await boardRepository.save(boardIdxs);
    await commentRepository.save(commentIdxs);

    // 너무 많은 양의 데이터 생성시 stack Overflow error 발생
    const boards = await Promise.all(
      Array(30000)
        .fill('')
        .map(async () => {
          const made = await boardFactory.make({
            user: faker.helpers.arrayElement(users),
          });
          return made;
        }),
    );

    const comments = await Promise.all(
      Array(100000)
        .fill('')
        .map(async () => {
          const made = await commentFactory.make({
            user: faker.helpers.arrayElement(users),
            board: faker.helpers.arrayElement(boards),
          });
          return made;
        }),
    );
    await boardRepository.save(boards);
    await commentRepository.save(comments);
  }
}
