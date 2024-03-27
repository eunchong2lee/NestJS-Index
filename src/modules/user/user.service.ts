import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll() {
    let options;
    return await this.userRepository.find(options);
  }

  async findOne() {
    let options;
    return await this.userRepository.findOne(options);
  }
}
