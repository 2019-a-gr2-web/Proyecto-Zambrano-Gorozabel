import { Controller, Get, Res } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('vxt/usuario')
export class UsuarioController{
  constructor(private readonly _usuarioServices:UsuarioService){

  }
  @Get('crearUsuario')
  crearUsuario(
    @Res() res
  ){
    res.render('usuario/crear-editar-usuario');
  }
}
