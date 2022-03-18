import { Body, Controller, Get, Post } from '@nestjs/common';
import CreateUserDTO from '../dto/createUserDTO';
import { User } from '../entities/user.entity';
import { UserService } from '../repositories/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async criarUsuario(@Body() createUserDTO: CreateUserDTO): Promise<void> {
    await this.userService.criarUsuario(createUserDTO);
  }
  /*
    @Get()
    async get(): Promise<void> {
      //await this.userService.save();
      console.log('Get');
    }*/


}
