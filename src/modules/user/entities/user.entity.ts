import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Board } from '../../board/entities/board.entity';
import { Comment } from '../../comment/entities/commment.entity';
import { Factory } from 'nestjs-seeder';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Factory((faker) => faker)
  @Column()
  username: string;

  @Factory((faker) => faker.lorem.words(10))
  @Column()
  email: string;

  @OneToMany(() => Board, (board) => board.user)
  boards: Board[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
