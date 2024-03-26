import { TypeOrmModule } from '@nestjs/typeorm';
import { seeder } from 'nestjs-seeder';
import { typeORMConfig } from '../../config/typeorm.config';
import { User } from '../../modules/user/entities/user.entity';
import { Board } from '../../modules/board/entities/board.entity';
import { Comment } from '../../modules/comment/entities/commment.entity';
import UserSeeder from './user.seeder';
import BoardSeeder from './board.seeder';
import CommentSeeder from './comment.seeder';

seeder({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    TypeOrmModule.forFeature([User, Board, Comment]),
  ],
}).run([UserSeeder, BoardSeeder, CommentSeeder]);
