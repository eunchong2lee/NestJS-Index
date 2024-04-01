import { Controller, Get, Query, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { UserSearchDTO } from './dtos/userSeach.dto';
import { UserIdx } from './entities/userIdx.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get('/search')
  async search(@Query() userSearchDto: UserSearchDTO): Promise<User[]> {
    return await this.userService.search(userSearchDto);
  }

  @Get('idx/search')
  async searchIdx(@Query() userSearchDto: UserSearchDTO): Promise<UserIdx[]> {
    return await this.userService.searchIdx(userSearchDto);
  }
}
