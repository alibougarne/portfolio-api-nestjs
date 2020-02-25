import { Controller, Get, Req, Param, Post, Body, HttpCode, Redirect, Res, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import { ResolvePlugin } from 'webpack';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get(':name')
  @HttpCode(205)
  // @Redirect('http://localhost:3002/', 301)
  async getHello(
    @Param('name') name: string
    // , @Res() res: Response
  ): Promise<string> {
    console.log('%c⧭ getHello', 'color: #1589a7', name);
    let a: string;
    let b: string;
    let c: string[] | void = await Promise.all(
      [this.appService.getFruit(name), this.appService.getFruit('strawberry')]
    ).then(_ => {
      console.log('%c⧭ resolve all: ', 'color: #733d00', _);
      // this.appService.fruits['kk'] = '🍔'
      console.log('%c⧭ resolve all fruits: ', 'color: #733d00', this.appService.fruits);
      console.log('%c⧭ resolve all merzak fruits: ', 'color: #733d00', this.appService.getMerzak('merzak'));
      a = _[0];
      b = _[1];
    });
    // res.status(HttpStatus.OK).send((`${a} and ${b} `));
    return `${a} and ${b} with 🍔`;
  }

  @Post()
  getResponse(@Body() params: any): string {
    console.log('%c⧭ getRespose', 'color: #d6064b', params);
    return JSON.stringify(params);
  }


  @Get('ca*ts')
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

}
