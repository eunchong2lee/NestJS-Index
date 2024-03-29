import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './repositories/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserIdx } from './entities/userIdx.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserIdx])],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
