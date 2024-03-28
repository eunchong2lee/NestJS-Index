import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserIdx } from '../../user/entities/userIdx.entity';
import { BoardIdx } from '../../board/entities/boardIdx.entity';

@Entity()
export class CommentIdx {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index()
  text: string;

  @ManyToOne(() => UserIdx, (userIdx) => userIdx.commentIdxs)
  @JoinColumn({ name: 'userIdx_id' })
  userIdx: UserIdx;

  @ManyToOne(() => BoardIdx, (boardIdx) => boardIdx.commentIdxs)
  @JoinColumn({ name: 'boardIdx_id' })
  boardIdx: BoardIdx;
}
