import { Controller, Get, Res } from '@nestjs/common';
import { GeneroService } from './genero.service';


@Controller('vxt/genero')
export class GeneroController{
  constructor(private readonly _generoServices:GeneroService){

  }
  @Get('crearGenero')
  crearGenero(
    @Res() res
  ){
    res.render('genero/crear-editar-genero');
  }
}
