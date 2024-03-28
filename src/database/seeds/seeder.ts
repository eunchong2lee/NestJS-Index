import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';
import { User } from '../../modules/user/entities/user.entity';
import { Board } from '../../modules/board/entities/board.entity';
import { Comment } from '../../modules/comment/entities/commment.entity';
import { SeederOptions, runSeeders } from 'typeorm-extension';

const dbDatabaseSource: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User, Board, Comment],
  seeds: ['src/database/seeds/*{.ts,.js}'],
  seedTracking: false,
  factories: ['src/database/factories/*{.ts,.js}'],
  logging: false,
  synchronize: false,
};

const dataSource = new DataSource(dbDatabaseSource);

dataSource.initialize().then(async () => {
  //   await dataSource.synchronize(true);
  await runSeeders(dataSource);
  process.exit();
});
