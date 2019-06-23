import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';

@Module({
  imports:[
    TypeOrmModule.forFeature(
      [
        UsuarioEntity       // PRIMERO ES LA ENTIDAD
      ],
      'default'   // SEGUNDO ES EL NOMBRE DE LA CONEXION
    )
  ],     //Modulos
  controllers:[
    UsuarioController
  ], //Controladores
  providers:[
    UsuarioService
  ],   //Servicios
  exports:[
    UsuarioService
  ]    //Exportar los Servicios
})
export class UsuarioModule{

}
