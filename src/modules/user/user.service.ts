import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll() {
    const options = '';
    return await this.userRepository.find(options);
  }

  async search(userSearchDto) {
    const options = '';
    return await this.userRepository.find(userSearchDto);
  }

  async findOne() {
    let options;
    return await this.userRepository.findOne(options);
  }
}
