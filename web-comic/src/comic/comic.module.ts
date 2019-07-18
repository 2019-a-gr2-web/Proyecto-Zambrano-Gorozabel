import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComicEntity } from './comic.entity';
import { ComicService } from './comic.service';
import { ComicController } from './comic.controller';
import { AutorEntity } from '../autor/autor.entity';
import { AutorService } from '../autor/autor.service';
import { EditorialEntity } from '../editorial/editorial.entity';
import { GeneroEntity } from '../genero/genero.entity';
import { EditorialService } from '../editorial/editorial.service';
import { GeneroService } from '../genero/genero.service';


@Module({
  imports:[
    TypeOrmModule.forFeature(
      [
        ComicEntity,       // PRIMERO ES LA ENTIDAD
        AutorEntity,
        GeneroEntity,
        EditorialEntity
      ],
      'default'   // SEGUNDO ES EL NOMBRE DE LA CONEXION
    )
  ],     //Modulos
  controllers:[
    ComicController
  ], //Controladores
  providers:[
    ComicService,
    AutorService,
    GeneroService,
    EditorialService
  ],   //Servicios
  exports:[
    ComicService
  ]    //Exportar los Servicios
})
export class ComicModule{

}
