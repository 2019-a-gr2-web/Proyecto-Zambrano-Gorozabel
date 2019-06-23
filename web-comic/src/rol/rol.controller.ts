import { Controller } from '@nestjs/common';
import { RolService } from './rol.service';

@Controller('vixstart/rol')
export class RolController{
  constructor(private readonly _rolServices:RolService){

  }
}
