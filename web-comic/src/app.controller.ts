import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('vxt')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('login')
  inicioSesion(
    @Res() res
  ){
    res.render('vix/login');
  }

  @Get('inicio')
  inicio(
    @Res() res,
    @Req() req
  ){
    res.render('vix/inicio');
  }
  @Get('menu')
  menu(
    @Res() res
  ){
    res.render('vix/menu');
  }
  @Get('comicListar')
  listarComics(
    @Res() res
  ){
    res.render('comic/comic-listar');
  }
}
