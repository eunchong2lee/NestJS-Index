import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Board } from '../../modules/board/entities/board.entity';
import { Comment } from '../../modules/comment/entities/commment.entity';
import { User } from '../../modules/user/entities/user.entity';
import { faker } from '@faker-js/faker';

export class MainSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const boardRepository = dataSource.getRepository(Board);
    const commentRepository = dataSource.getRepository(Comment);

    const userFactory = factoryManager.get(User);
    const boardFactory = factoryManager.get(Board);
    const commentFactory = factoryManager.get(Comment);

    const users = await userFactory.saveMany(7);

    const boards = await Promise.all(
      Array(17)
        .fill('')
        .map(async () => {
          const made = await boardFactory.make({
            user: faker.helpers.arrayElement(users),
          });
          return made;
        }),
    );

    const comments = await Promise.all(
      Array(60)
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
