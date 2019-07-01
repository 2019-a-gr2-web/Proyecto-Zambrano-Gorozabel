import { Controller } from '@nestjs/common';
import { CalificacioneventoService } from './calificacionevento.service';



@Controller('vixstart/comic')
export class CalificacioneventoController{
  constructor(private readonly _calificacioneventoService:CalificacioneventoService){

  }
}