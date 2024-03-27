import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';
import { User } from '../modules/user/entities/user.entity';
import { Board } from '../modules/board/entities/board.entity';
import { Comment } from '../modules/comment/entities/commment.entity';

const dbDatabaseSource: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User, Board, Comment],
  migrations: [__dirname + 'src/database/migrations/*{.ts,.js}'],
  logging: true,
  synchronize: false,
};

const dataSource = new DataSource(dbDatabaseSource);

export default dataSource;
