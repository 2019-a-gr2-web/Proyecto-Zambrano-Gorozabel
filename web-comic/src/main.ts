import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from "path";
import * as favicon from "serve-favicon";
import * as express from 'express';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from "path";

async function bootstrap() {
  const app = await NestFactory.create(AppModule) as NestExpressApplication;

  app.setViewEngine('ejs');
  app.setBaseViewsDir(join(__dirname,'..','views'));
  app.use(express.static('publico'));
  //app.use(favicon(path.join(__dirname,'../publico','imagenes','nero.ico')));

  await app.listen(3000);


}
bootstrap();
