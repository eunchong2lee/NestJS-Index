import { Seeder } from 'nestjs-seeder';
import { UserRepository } from '../../modules/user/user.repository';

export default class UserSeeder implements Seeder {
  constructor(private readonly userRepository: UserRepository) {}

  async seed(): Promise<any> {
    return;
  }

  async drop(): Promise<any> {
    return;
  }
}
