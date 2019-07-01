import { Controller, Get, Res } from '@nestjs/common';
import { AutorService } from './autor.service';

@Controller('vxt/autor')
export class AutorController{
  constructor(private readonly _autorServices:AutorService){

  }

  @Get('crearAutor')
  crearAutor(
    @Res() res
  ){
    res.render('autor/crear-editar-autor');
  }
}
