import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventoService } from './evento.service';
import { EventoController } from './evento.controller';
import { EventoEntity } from './evento.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature(
      [
        EventoEntity       // PRIMERO ES LA ENTIDAD
      ],
      'default'   // SEGUNDO ES EL NOMBRE DE LA CONEXION
    )
  ],     //Modulos
  controllers:[
    EventoController
  ], //Controladores
  providers:[
    EventoService
  ],   //Servicios
  exports:[
    EventoService
  ]    //Exportar los Servicios
})
export class EventoModule{

}
