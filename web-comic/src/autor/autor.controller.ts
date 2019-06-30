import { Controller } from '@nestjs/common';
import { AutorService } from './autor.service';

@Controller('vixstart/autor')
export class AutorController{
  constructor(private readonly _autorServices:AutorService){

  }
}
