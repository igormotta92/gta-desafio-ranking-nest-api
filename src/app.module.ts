import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RankingModule } from './ranking/ranking.module';
import { User } from './user/entities/user.entity';
import { Ranking } from './ranking/entities/ranking.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'desenv_root',
      database: 'gta-desafio-ranking-nes-api',
      entities: [User, Ranking],
      synchronize: true,
      logging: true,
    })
    , UserModule, RankingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
