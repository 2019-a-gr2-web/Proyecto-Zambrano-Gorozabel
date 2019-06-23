import { Controller } from '@nestjs/common';
import { EventoService } from './evento.service';

@Controller('vixstart/evento')
export class EventoController{
  constructor(private readonly _eventoServices:EventoService){

  }
}
