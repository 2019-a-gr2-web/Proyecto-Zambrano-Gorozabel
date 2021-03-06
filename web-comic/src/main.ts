import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from "path";
import * as favicon from "serve-favicon";
import * as express from 'express';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from "path";

const cookieParser = require('cookie-parser');


async function bootstrap() {
  const app = await NestFactory.create(AppModule) as NestExpressApplication;
  app.use(cookieParser('Lo hice con mis lagrimas'));

  app.setViewEngine('ejs');
  app.setBaseViewsDir(join(__dirname,'..','views'));
  app.use(express.static('publico'));
  //app.use(favicon(path.join(__dirname,'../publico','imagenes','nero.ico')));

  await app.listen(3002);


}
bootstrap();
