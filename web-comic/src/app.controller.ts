import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { UsuarioService } from './usuario/usuario.service';

@Controller('vxt')
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly _usuarioServices:UsuarioService) {}

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

  @Get('inicio')
  inicio(
    @Res() res,
    @Req() req
  ){
    res.render('vix/inicio');
  }
  @Get('menu')
  menu(
    @Res() res
  ){
    res.render('vix/menu');
  }
  @Get('comicListar')
  listarComics(
    @Res() res
  ){
    res.render('comic/comic-listar');
  }
  @Post("inicioSesion")
  async iniciarSesion(
    @Res() res,
    @Body('usuario') usuario,
    @Body('passwd') passwd
  ){
    try{
      console.log(usuario);
      console.log(passwd);
      var user = await this._usuarioServices.buscar(usuario);
      user = user.filter(
        it=>{
          return (it.nombreUsuario==usuario);
        }
      );
      console.log(user);
      if(user.length==1){
        if(user[0].nombreUsuario==usuario && user[0].passwordUsuario==passwd){
          res.redirect('/vxt/inicio');
        }else{
          res.redirect('login');
        }
      }else{
        res.redirect('login');
      }
    }catch(e){
      console.log(e.message);
      res.redirect('login');

    }

  }
}
