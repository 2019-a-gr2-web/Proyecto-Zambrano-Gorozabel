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

@Module({
  imports: [
    TypeOrmModule.forRoot({
    name:'default',   // Nombre de la cadena de conexion por defecto de TYPEORM
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'proyecto',
    entities: [
      ComicEntity,
      EditorialEntity,
      AutorEntity
    ],
    synchronize: true,
    dropSchema:false,
    insecureAuth : true
  }),
    ComicModule,
    AutorModule,
    EditorialModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
