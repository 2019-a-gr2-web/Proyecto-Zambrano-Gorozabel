import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComicEntity } from './comic.entity';
import { ComicService } from './comic.service';
import { ComicController } from './comic.controller';


@Module({
  imports:[
    TypeOrmModule.forFeature(
      [
        ComicEntity       // PRIMERO ES LA ENTIDAD
      ],
      'default'   // SEGUNDO ES EL NOMBRE DE LA CONEXION
    )
  ],     //Modulos
  controllers:[
    ComicController
  ], //Controladores
  providers:[
    ComicService
  ],   //Servicios
  exports:[
    ComicService
  ]    //Exportar los Servicios
})
export class ComicModule{

}
