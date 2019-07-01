import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComicEntity } from './comic/comic.entity';
import { EditorialEntity } from './editorial/editorial.entity';
import { AutorEntity } from './autor/autor.entity';
import { ComicModule } from './comic/comic.module';
import { AutorModule } from './autor/autor.module';
import { EditorialModule } from './editorial/editorial.module';
import { EventoEntity } from './evento/evento.entity';
import { RolEntity } from './rol/rol.entity';
import { UsuarioEntity } from './usuario/usuario.entity';
import { GeneroEntity } from './genero/genero.entity';
import { EventoModule } from './evento/evento.module';
import { GeneroModule } from './genero/genero.module';
import { UsuarioModule } from './usuario/usuario.module';
import { RolModule } from './rol/rol.module';
import { LugargeograficoEntity } from './lugargeografico/lugargeografico.entity';
import { EditorialautorEntity } from './editorialautor/editorialautor.entity';
import { EditorialautorModule } from './editorialautor/editorialautor.module';
import { EditorialautorcomicEntity } from './editorialautorcomic/editorialautorcomic.entity';
import { EditorialautorcomicModule } from './editorialautorcomic/editorialautorcomic.module';
import { CalificacioncomicModule } from './calificacioncomic/calificacioncomic.module';
import { CalificacioncomicService } from './calificacioncomic/calificacioncomic.service';
import { CalificacioncomicEntity } from './calificacioncomic/calificacioncomic.entity';
import { CalificacioneventoEntity } from './calificacionevento/calificacionevento.entity';
import { CalificacioneventoModule } from './calificacionevento/calificacionevento.module';
import { LugargeograficoModule } from './lugargeografico/lugargeografico.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    name:'default',   // Nombre de la cadena de conexion por defecto de TYPEORM
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'proyectoweb',
    entities: [
      ComicEntity,
      EditorialEntity,
      AutorEntity,
      EventoEntity,
      RolEntity,
      UsuarioEntity,
      GeneroEntity,
      LugargeograficoEntity,
      EditorialautorEntity,
      EditorialautorcomicEntity,
      CalificacioncomicEntity,
      CalificacioneventoEntity
    ],
    synchronize: true,
    dropSchema:false,
    insecureAuth : true
  }),
    ComicModule,
    AutorModule,
    EditorialModule,
    EventoModule,
    UsuarioModule,
    GeneroModule,
    RolModule,
    EditorialautorModule,
    EditorialautorcomicModule,
    CalificacioncomicModule,
    CalificacioneventoModule,
    LugargeograficoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
