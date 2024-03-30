import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryRunner, Repository } from 'typeorm';
import { UserIdx } from '../entities/userIdx.entity';

@Injectable()
export class UserIdxRepository {
  constructor(
    @InjectRepository(UserIdx) private userIdxRepository: Repository<UserIdx>,
  ) {}
  async save(options) {
    return await this.userIdxRepository.save(options);
  }

  async search(options) {
    return await this.userIdxRepository.save(options);
  }

  async find(options) {
    return await this.userIdxRepository.find(options);
  }

  async findOne(options) {
    return await this.userIdxRepository.findOne(options);
  }

  async update(id, options) {
    return await this.userIdxRepository.update(id, options);
  }

  async remove(user: UserIdx) {
    return await this.userIdxRepository.remove(user);
  }

  async query(options) {
    return await this.userIdxRepository.query(options);
  }
}
