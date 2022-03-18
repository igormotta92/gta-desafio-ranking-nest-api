import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager } from "typeorm";
import { Ranking } from '../entities/ranking.entity'
import { User } from '../../user/entities/user.entity'

@Injectable()
export class RankingService {
  constructor(
    @InjectRepository(Ranking)
    private rankingRepository: Repository<Ranking>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async sort() {
    await getManager().query(`DELETE FROM ranking where 1=1;`);

    const sorteds = await this.userRepository.createQueryBuilder('user')
      .orderBy('score', 'DESC')
      .getMany();

    let query = `INSERT INTO \`ranking\` (\`userId\`, \`position\`) VALUES `;

    let aux = [];
    let i = 1;
    for (var sorted of sorteds) {
      aux.push(`(${sorted.id}, ${i++})`);
    }
    query += aux.join(', ');

    let res = await getManager().query(query);
  }

  async list() {
    let query = `select 
      r.\`position\`, u.username, u.score  from ranking r 
      inner join \`user\` u on u.id = r.userId`;
    let res = await getManager().query(query);

    return res;
  }

}
