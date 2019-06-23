import { Controller } from '@nestjs/common';
import { LugargeograficoService } from './lugargeografico.service';


@Controller('vixstart/evento')
export class LugargeograficoController{
  constructor(private readonly _eventoServices:LugargeograficoService){

  }
}
