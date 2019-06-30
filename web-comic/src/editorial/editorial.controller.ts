import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { EditorialService } from './editorial.service';
import { EditorialEntity } from './editorial.entity';
import { EditorialCreateDto } from './dto/editorial.create.dto';
import { validateEach } from '@nestjs/common/utils/validate-each.util';
import { validate } from 'class-validator';

@Controller('vixstart/editorial')
export class EditorialController{
  constructor(private readonly _editorialServices:EditorialService){

  }

  @Post('crear')
  async crearEditorial(
    @Res() res,
    @Body() editorial:EditorialEntity
  ){
    if(editorial.editorialAutor==null){
      editorial.editorialAutor=null;
    }
    let editorialAValidar = new EditorialCreateDto();
    editorialAValidar.nombre = editorial.nombre;

    try{
      const errores = await validate(editorialAValidar);
      if(errores.length>0){
        console.log(errores);
      }else{
        const respuestaCrear = await this._editorialServices.crear(editorial);
        console.log('Respuesta CREAR: ',respuestaCrear);
        res.send({mensaje:'Exito',codigo:200});
      }
    }catch (e) {
      res.status(500);
      res.send({mensaje:'Error',codigo:500})
    }
  }

  @Get('lista')
  async listar(
    @Res() res,
  ){
    try{
      const arregloEditorial = await this._editorialServices.buscar();
      res.send(arregloEditorial);
    }catch (e) {
      res.status(500);
      res.send({mensaje:'Error',codigo:500});
    }
  }

}
