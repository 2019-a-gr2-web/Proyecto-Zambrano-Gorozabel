import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalificacioncomicEntity } from './calificacioncomic.entity';
import { CalificacioncomicController } from './calificacioncomic.controller';
import { CalificacioncomicService } from './calificacioncomic.service';



@Module({
  imports:[
    TypeOrmModule.forFeature(
      [
        CalificacioncomicEntity       // PRIMERO ES LA ENTIDAD
      ],
      'default'   // SEGUNDO ES EL NOMBRE DE LA CONEXION
    )
  ],     //Modulos
  controllers:[
    CalificacioncomicController
  ], //Controladores
  providers:[
    CalificacioncomicService
  ],   //Servicios
  exports:[
    CalificacioncomicService
  ]    //Exportar los Servicios
})
export class CalificacioncomicModule{

}