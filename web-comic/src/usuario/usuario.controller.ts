import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioCreateDto } from './dto/usuario.create.dto';
import { validate } from 'class-validator';
import { RolService } from '../rol/rol.service';

@Controller('vxt/usuario')
export class UsuarioController{
  constructor(private readonly _usuarioServices:UsuarioService,
              private readonly _rolServices:RolService){

  }
  @Get('crearUsuario')
  async crearUsuario(
    @Res() res
  ){
    var roles = await this._rolServices.buscar();
    res.render('usuario/crear-editar-usuario',{
      roles:roles
    });
  }

  @Post('crearNUsuario')
  async crearNUser(
    @Res() res,
    @Body() usuario:UsuarioEntity
  ){
    console.log(usuario);
    let usuarioValidado = new UsuarioCreateDto();
    usuarioValidado.nombreUsuario = usuario.nombreUsuario;
    usuarioValidado.imagenUsuario = usuario.imagenUsuario;
    usuarioValidado.cedulaUsuario = usuario.cedulaUsuario;
    usuarioValidado.emailUsuario = usuario.emailUsuario;
    usuarioValidado.passwordUsuario = usuario.passwordUsuario;
    
    try{
      const errores = await validate(usuarioValidado);
      if(errores.length>0){
        console.log("Errores");
        console.error(errores);
        res.redirect('crearUsuario');
      }else{
        const respuestaCrear = await this._usuarioServices
          .crearUsuario(usuario); // Promesa
        console.log('RESPUESTA: ', respuestaCrear);
        res.redirect('crearUsuario');
      }

    }catch (e) {
      res.status(500);
      console.log(e.message);
      res.send({mensaje:e.message,codigo:500});
    }
  }
}
