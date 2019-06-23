import { Controller } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('vixstart/usuario')
export class UsuarioController{
  constructor(private readonly _usuarioServices:UsuarioService){

  }
}
