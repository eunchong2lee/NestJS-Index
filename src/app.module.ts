import { Module } from '@nestjs/common';
import { typeORMConfig } from './common/config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
