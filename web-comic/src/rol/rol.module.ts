import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolEntity } from './rol.entity';
import { RolService } from './rol.service';
import { RolController } from './rol.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature(
      [
        RolEntity       // PRIMERO ES LA ENTIDAD
      ],
      'default'   // SEGUNDO ES EL NOMBRE DE LA CONEXION
    )
  ],     //Modulos
  controllers:[
    RolController
  ], //Controladores
  providers:[
    RolService
  ],   //Servicios
  exports:[
    RolService
  ]    //Exportar los Servicios
})
export class RolModule{

}
