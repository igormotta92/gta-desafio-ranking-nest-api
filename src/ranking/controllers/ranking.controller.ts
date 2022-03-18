import { Controller, Get, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { RankingService } from '../repositories/ranking.service'


@Controller('ranking')
export class RankingController {
  constructor(private readonly rankingService: RankingService) { }


  //@HttpCode(HttpStatus.ACCEPTED)
  @Post()
  sort() {
    console.log("sort")
    this.rankingService.sort();
  }



  @Get()
  async list(@Res() response: Response) {
    //console.log("list")
    let res = await this.rankingService.list();
    response.status(200).json(res).send();
  }

}

