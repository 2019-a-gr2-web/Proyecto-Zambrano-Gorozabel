import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { RolService } from './rol.service';
import { RolEntity } from './rol.entity';

@Controller('vxt/rol')
export class RolController{
  constructor(private readonly _rolServices:RolService){

  }

  @Get('crearRol')
  crearRol(
    @Res() res
  ){
    res.render('rol/crear-editar-rol');
  }

  @Post('crear-Rol')
  async crearRolsito(
    @Res() res,
    @Body() rol:RolEntity
  ){
    try{

    }catch (e) {

    }
  }
}
