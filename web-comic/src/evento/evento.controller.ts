import { Controller, Get, Res } from '@nestjs/common';
import { EventoService } from './evento.service';

@Controller('vxt/evento')
export class EventoController{
  constructor(private readonly _eventoServices:EventoService){

  }

  @Get('crearEvento')
  crearEvento(
    @Res() res
  ){
    res.render('evento/crear-editar-evento');
  }
}
