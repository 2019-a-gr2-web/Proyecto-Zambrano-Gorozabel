import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutorEntity } from './autor.entity';
import { AutorService } from './autor.service';
import { AutorController } from './autor.controller';
import { EditorialEntity } from '../editorial/editorial.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature(
      [
        AutorEntity,        // PRIMERO ES LA ENTIDAD
        EditorialEntity
      ],
      'default'   // SEGUNDO ES EL NOMBRE DE LA CONEXION
    )
  ],     //Modulos
  controllers:[
    AutorController
  ], //Controladores
  providers:[
    AutorService
  ],   //Servicios
  exports:[
    AutorService
  ]    //Exportar los Servicios
})
export class AutorModule{

}
