import { Controller } from '@nestjs/common';
import { GeneroService } from './genero.service';


@Controller('vixstart/genero')
export class GeneroController{
  constructor(private readonly _generoServices:GeneroService){

  }
}
