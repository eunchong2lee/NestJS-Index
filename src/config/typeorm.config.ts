import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';
import { User } from '../modules/user/entities/user.entity';
import { Board } from '../modules/board/entities/board.entity';
import { Comment } from '../modules/comment/entities/comment.entity';
import { CommentIdx } from '../modules/comment/entities/commentIdx.entity';
import { BoardIdx } from '../modules/board/entities/boardIdx.entity';
import { UserIdx } from '../modules/user/entities/userIdx.entity';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User, Board, Comment, UserIdx, BoardIdx, CommentIdx],
  autoLoadEntities: true,
  migrations: [__dirname + 'src/database/migrations/*{.ts,.js}'],
  logging: true,
  synchronize: false,
};
