import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager } from "typeorm";
import { User } from "../entities/user.entity";
import CreateUserDTO from '../dto/createUserDTO';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async criarUsuario(createUserDTO: CreateUserDTO) {

    const { quantidade } = createUserDTO;

    let users = [];
    for (let i = 0; i < quantidade; i++) {

      users.push({
        username: `fake_${i}`,
        score: Math.floor(Math.random() * 1000),
      });
    }

    let query = `INSERT INTO \`user\` (\`username\`, score) VALUES `;

    let aux = [];
    for (let user of users) {
      aux.push(`('${user.username}', ${user.score})`);
    }
    query += aux.join(', ');

    let res = await getManager().query(query);

    return true;
  }

}
