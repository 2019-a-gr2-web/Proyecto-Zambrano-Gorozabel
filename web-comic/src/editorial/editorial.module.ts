import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EditorialEntity } from './editorial.entity';
import { EditorialController } from './editorial.controller';
import { EditorialService } from './editorial.service';


@Module({
  imports:[
    TypeOrmModule.forFeature(
      [
        EditorialEntity       // PRIMERO ES LA ENTIDAD
      ],
      'default'   // SEGUNDO ES EL NOMBRE DE LA CONEXION
    )
  ],     //Modulos
  controllers:[
    EditorialController
  ], //Controladores
  providers:[
    EditorialService
  ],   //Servicios
  exports:[
    EditorialService
  ]    //Exportar los Servicios
})
export class EditorialModule{

}
