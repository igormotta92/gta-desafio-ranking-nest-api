import { Module } from '@nestjs/common';
import { RankingService } from './repositories/ranking.service';
import { RankingController } from './controllers/ranking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ranking } from './entities/ranking.entity';
import { UserService } from '../user/repositories/user.service'
import { UserModule } from '../user/user.module';
import { User } from '../user/entities/user.entity'


@Module({
  imports: [TypeOrmModule.forFeature([Ranking, User])],
  providers: [RankingService, UserService],
  controllers: [RankingController],
})
export class RankingModule { }
