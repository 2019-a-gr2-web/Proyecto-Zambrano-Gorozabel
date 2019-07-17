import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ComicService } from './comic.service';

@Controller('vxt/comic')
export class ComicController{
  constructor(private readonly _comicServices:ComicService){

  }
  @Get('crearComic')
  crearComic(
    @Res() res
  ){
    res.render('comic/crear-editar-comic');
  }

  @Post('comic-crear')
  async crearC(
    @Res() res,
    @Body('comic') comic
  ){
    const
  }

  @Get("lista")
  listarComics(
    @Res() res
  ){
    this._comicServices.
    res.render('comic')
  }
}
