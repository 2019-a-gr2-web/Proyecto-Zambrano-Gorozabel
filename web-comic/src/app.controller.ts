import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('vxt')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('login')
  inicioSesion(
    @Res() res
  ){
    res.render('vix/login');
  }
}
