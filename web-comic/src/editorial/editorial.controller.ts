import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { EditorialService } from './editorial.service';
import { EditorialEntity } from './editorial.entity';
import { EditorialCreateDto } from './dto/editorial.create.dto';
import { validateEach } from '@nestjs/common/utils/validate-each.util';
import { validate } from 'class-validator';
import { AutorEntity } from '../autor/autor.entity';
import { AutorCretateDto } from '../autor/dto/autor.cretate.dto';

@Controller('vxt/editorial')
export class EditorialController{
  constructor(private readonly _editorialServices:EditorialService){

  }

  @Get('crearEditorial')
  crearEditorial(
    @Res() res
  ){

    res.render('editorial/crear-editar-editorial');

   
  }

  @Post('crear-editorial')
  async crearPost(
    @Body() editorial: EditorialEntity,
    @Res() res
  ) {

    let editorialAValidar = new EditorialCreateDto();



    editorialAValidar.nombreEditorial = editorial.nombreEditorial;





    console.log(editorial);
    try {
      const errores = await validate(editorialAValidar);
      if (errores.length > 0) {
        console.error(errores);

      } else {

        const respuestaCrear = await this._editorialServices
          .crear(editorial); // Promesa

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
