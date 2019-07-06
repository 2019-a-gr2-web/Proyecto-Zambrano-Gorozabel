import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { EventoService } from './evento.service';
import { EditorialEntity } from '../editorial/editorial.entity';
import { EditorialCreateDto } from '../editorial/dto/editorial.create.dto';
import { validate } from 'class-validator';
import { EventoEntity } from './evento.entity';
import { EventoCreateDto } from './dto/evento.create.dto';

@Controller('vxt/evento')
export class EventoController {
  constructor(private readonly _eventoServices: EventoService) {

  }

  @Get('crearEvento')
  crearEvento(
    @Res() res
  ) {
    res.render('evento/crear-editar-evento');
  }

  @Post('crear-evento')
  async crearPost(
    @Body() evento: EventoEntity,
    @Res() res
  ) {
    evento.fechaEvento = evento.fechaEvento ? new Date(evento.fechaEvento) : undefined;

    let eventoAValidar = new EventoCreateDto();

    eventoAValidar.nombreEvento = evento.nombreEvento;
    eventoAValidar.imagenEvento = evento.imagenEvento;
    eventoAValidar.fechaEvento = evento.fechaEvento;

    console.log(evento);
    try {
      const errores = await validate(eventoAValidar);
      if (errores.length > 0) {
        console.error(errores);

      } else {

        const respuestaCrear = await this._eventoServices
          .crear(evento); // Promesa

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

