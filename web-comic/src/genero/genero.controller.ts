import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { EventoEntity } from '../evento/evento.entity';
import { EventoCreateDto } from '../evento/dto/evento.create.dto';
import { validate } from 'class-validator';
import { GeneroEntity } from './genero.entity';
import { GeneroCreateDto } from './dto/genero.create.dto';


@Controller('vxt/genero')
export class GeneroController{
  constructor(private readonly _generoServices:GeneroService){

  }
  @Get('crearGenero')
  crearGenero(
    @Res() res
  ){
    res.render('genero/crear-editar-genero');
  }

  @Post('crear-genero')
  async crearPost(
    @Body() genero: GeneroEntity,
    @Res() res
  ) {
    let generoAValidar = new GeneroCreateDto();
    generoAValidar.nombreGenero = genero.nombreGenero;
    console.log(genero);
    try {
      const errores = await validate(generoAValidar);
      if (errores.length > 0) {
        console.error(errores);

      } else {
        const respuestaCrear = await this._generoServices
          .crear(genero); // Promesa

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
