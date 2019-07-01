import { Controller, Get, Res } from '@nestjs/common';
import { RolService } from './rol.service';

@Controller('vxt/rol')
export class RolController{
  constructor(private readonly _rolServices:RolService){

  }

  @Get('crearRol')
  crearUsuario(
    @Res() res
  ){
    res.render('rol/crear-editar-rol');
  }
}
