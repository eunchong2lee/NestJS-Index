import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Index,
} from 'typeorm';
import { BoardIdx } from '../../board/entities/boardIdx.entity';
import { CommentIdx } from '../../comment/entities/commentIdx.entity';

@Entity()
export class UserIdx {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index()
  username: string;

  @Column()
  email: string;

  @OneToMany(() => BoardIdx, (boardIdx) => boardIdx.userIdx)
  boardIdxs: BoardIdx[];

  @OneToMany(() => CommentIdx, (commentIdx) => commentIdx.userIdx)
  commentIdxs: CommentIdx[];
}
