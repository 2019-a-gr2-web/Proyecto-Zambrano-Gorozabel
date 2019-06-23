import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LugargeograficoEntity } from './lugargeografico.entity';
import { LugargeograficoController } from './lugargeografico.controller';
import { LugargeograficoService } from './lugargeografico.service';

@Module({
  imports:[
    TypeOrmModule.forFeature(
      [
        LugargeograficoEntity       // PRIMERO ES LA ENTIDAD
      ],
      'default'   // SEGUNDO ES EL NOMBRE DE LA CONEXION
    )
  ],     //Modulos
  controllers:[
    LugargeograficoController
  ], //Controladores
  providers:[
    LugargeograficoService
  ],   //Servicios
  exports:[
    LugargeograficoService
  ]    //Exportar los Servicios
})
export class LugargeograficoModule{

}
