import { Module } from '@nestjs/common';
import { UserService } from '../user/repositories/user.service';
import { UserController } from '../user/controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule { }
