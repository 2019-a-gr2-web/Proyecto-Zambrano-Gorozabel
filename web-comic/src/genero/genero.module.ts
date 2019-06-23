import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneroEntity } from './genero.entity';
import { GeneroController } from './genero.controller';
import { GeneroService } from './genero.service';

@Module({
  imports:[
    TypeOrmModule.forFeature(
      [
        GeneroEntity       // PRIMERO ES LA ENTIDAD
      ],
      'default'   // SEGUNDO ES EL NOMBRE DE LA CONEXION
    )
  ],     //Modulos
  controllers:[
    GeneroController
  ], //Controladores
  providers:[
    GeneroService
  ],   //Servicios
  exports:[
    GeneroService
  ]    //Exportar los Servicios
})
export class GeneroModule{

}
