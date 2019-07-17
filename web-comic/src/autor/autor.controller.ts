import { Controller, Get, Post, Res } from '@nestjs/common';
import { AutorService } from './autor.service';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { AutorEntity } from './autor.entity';
import { AutorCretateDto } from './dto/autor.cretate.dto';
import { validate } from 'class-validator';

@Controller('vxt/autor')
export class AutorController{
  constructor(private readonly _autorServices:AutorService){

  }

  @Get('crearAutor')
  crearAutor(
    @Res() res
  ){
    res.render('autor/crear-editar-autor');
  }

  @Post('crear-autor')
  async crearAutorPost(
    @Body() autor: AutorEntity,
    @Res() res
  ) {
    autor.fechaNacimientoAutor = autor.fechaNacimientoAutor ? new Date(autor.fechaNacimientoAutor) : undefined;
    let autorAValidar = new AutorCretateDto();



    autorAValidar.nombreAutor = autor.nombreAutor;
    autorAValidar.identAutor=autor.identAutor;
    autorAValidar.fechaNacimientoAutor=autor.fechaNacimientoAutor;
    autorAValidar.estadoTrabajandoAutor= Boolean(autor.estadoTrabajandoAutor);
    autorAValidar.imagenAutor=autor.imagenAutor;




    console.log(autor);
    try {
      const errores = await validate(autorAValidar);
      if (errores.length > 0) {
        console.error(errores);

      } else {

        const respuestaCrear = await this._autorServices
          .crear(autor); // Promesa

        console.log('RESPUESTA: ', respuestaCrear);
        res.redirect('/vxt/autor/crearAutor');


      }
    } catch
      (e) {
      console.error(e);
      res.status(500);
      res.send({mensaje: 'Error', codigo: 500});
    }




  }



}
