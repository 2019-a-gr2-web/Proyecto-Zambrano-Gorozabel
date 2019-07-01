import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { EditorialService } from './editorial.service';
import { EditorialEntity } from './editorial.entity';
import { EditorialCreateDto } from './dto/editorial.create.dto';
import { validateEach } from '@nestjs/common/utils/validate-each.util';
import { validate } from 'class-validator';

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

}
