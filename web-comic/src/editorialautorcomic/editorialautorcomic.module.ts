import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EditorialautorcomicEntity } from './editorialautorcomic.entity';
import { EditorialautorcomicService } from './editorialautorcomic.service';
import { EditorialautorController } from '../editorialautor/editorialautor.controller';
import { EditorialautorcomicController } from './editorialautorcomic.controller';



@Module({
  imports:[
    TypeOrmModule.forFeature(
      [
        EditorialautorcomicEntity       // PRIMERO ES LA ENTIDAD
      ],
      'default'   // SEGUNDO ES EL NOMBRE DE LA CONEXION
    )
  ],     //Modulos
  controllers:[
    EditorialautorcomicController
  ], //Controladores
  providers:[
    EditorialautorcomicService
  ],   //Servicios
  exports:[
    EditorialautorcomicService
  ]    //Exportar los Servicios
})
export class EditorialautorcomicModule{

}