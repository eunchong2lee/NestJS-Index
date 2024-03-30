import { Injectable } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { UserIdxRepository } from './repositories/userIdx.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userIdxRepository: UserIdxRepository,
  ) {}

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
