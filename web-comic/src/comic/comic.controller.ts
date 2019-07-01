import { Controller, Get, Res } from '@nestjs/common';
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
}
