import { Seeder } from 'nestjs-seeder';
import { CommentRepository } from '../../modules/comment/comment.repository';

export default class CommentSeeder implements Seeder {
  constructor(private readonly commentRepository: CommentRepository) {}

  async seed(): Promise<any> {
    return;
  }

  async drop(): Promise<any> {
    return;
  }
}
