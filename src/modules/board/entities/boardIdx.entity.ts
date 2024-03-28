import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserIdx } from '../../user/entities/userIdx.entity';
import { CommentIdx } from '../../comment/entities/commentIdx.entity';

@Entity()
export class BoardIdx {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index()
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => UserIdx, (userIdx) => userIdx.boardIdxs)
  @JoinColumn({ name: 'user_id' })
  userIdx: UserIdx;

  @OneToMany(() => CommentIdx, (commentIdx) => commentIdx.boardIdx)
  commentIdxs: CommentIdx[];
}
