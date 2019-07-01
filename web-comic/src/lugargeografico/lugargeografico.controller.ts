import { Controller, Get, Res } from '@nestjs/common';
import { LugargeograficoService } from './lugargeografico.service';


@Controller('vxt/lugar')
export class LugargeograficoController{
  constructor(private readonly _lugarGeograficoService:LugargeograficoService){

  }
  @Get('crearLugar')
  crearLugarGeo(
    @Res() res
  ){
    res.render('luggeo/crear-editar-luggeo');
  }
}
