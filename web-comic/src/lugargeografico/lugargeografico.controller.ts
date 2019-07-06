import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { LugargeograficoService } from './lugargeografico.service';
import { GeneroEntity } from '../genero/genero.entity';
import { GeneroCreateDto } from '../genero/dto/genero.create.dto';
import { validate } from 'class-validator';
import { LugargeograficoEntity } from './lugargeografico.entity';
import { LugargeograficoCreateDto } from './dto/lugargeografico.create.dto';


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

  @Post('crear-lugar')
  async crearPost(
    @Body() lugar: LugargeograficoEntity,
    @Res() res
  ) {


    let lugarAValidar = new LugargeograficoCreateDto();

    lugarAValidar.nombreLugarGeografico = lugar.nombreLugarGeografico;


    console.log(lugar);
    try {
      const errores = await validate(lugarAValidar);
      if (errores.length > 0) {
        console.error(errores);

      } else {

        const respuestaCrear = await this._lugarGeograficoService
          .crear(lugar); // Promesa

        console.log('RESPUESTA: ', respuestaCrear);
        res.redirect('/vxt/autor/crearAutor');

      }
    } catch
      (e) {
      console.error(e);
      res.status(500);
      res.send({ mensaje: 'Error', codigo: 500 });
    }
  }
}
