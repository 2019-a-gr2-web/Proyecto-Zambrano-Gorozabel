import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsuarioService{

  constructor(@InjectRepository(UsuarioEntity)
              private readonly _usuarioRepository: Repository<UsuarioEntity>) {
  }

  crearUsuario(user:UsuarioEntity):Promise<UsuarioEntity>{
    const objetoEntidad = this._usuarioRepository.create(user);
    return this._usuarioRepository.save(objetoEntidad);
  }

  buscar(parametros?):Promise<UsuarioEntity[]>{
    return this._usuarioRepository.find({ where: { nombre_usuario: parametros} });
  }


}
