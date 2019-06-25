import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalificacioneventoEntity } from './calificacionevento.entity';
import { CalificacioneventoController } from './calificacionevento.controller';
import { CalificacioneventoService } from './calificacionevento.service';




@Module({
  imports:[
    TypeOrmModule.forFeature(
      [
        CalificacioneventoEntity       // PRIMERO ES LA ENTIDAD
      ],
      'default'   // SEGUNDO ES EL NOMBRE DE LA CONEXION
    )
  ],     //Modulos
  controllers:[
    CalificacioneventoController
  ], //Controladores
  providers:[
    CalificacioneventoService
  ],   //Servicios
  exports:[
    CalificacioneventoService
  ]    //Exportar los Servicios
})
export class CalificacioneventoModule{

}