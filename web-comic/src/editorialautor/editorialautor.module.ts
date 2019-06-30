import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EditorialautorEntity } from './editorialautor.entity';
import { EditorialautorController } from './editorialautor.controller';
import { EditorialautorService } from './editorialautor.service';



@Module({
  imports:[
    TypeOrmModule.forFeature(
      [
        EditorialautorEntity       // PRIMERO ES LA ENTIDAD
      ],
      'default'   // SEGUNDO ES EL NOMBRE DE LA CONEXION
    )
  ],     //Modulos
  controllers:[
    EditorialautorController
  ], //Controladores
  providers:[
    EditorialautorService
  ],   //Servicios
  exports:[
    EditorialautorService
  ]    //Exportar los Servicios
})
export class EditorialautorModule{

}
