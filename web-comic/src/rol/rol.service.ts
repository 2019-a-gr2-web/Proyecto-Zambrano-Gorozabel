import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolEntity } from './rol.entity';

@Injectable()
export class RolService{
  constructor(@InjectRepository(RolEntity)
              private readonly _rolRepository: Repository<RolEntity>) {
  }

  buscar(parametros?):Promise<RolEntity[]>{
    return this._rolRepository.find(parametros);
  }

  crear(rol:RolEntity):Promise<RolEntity>{
    const objeto = this._rolRepository.create(rol);
    return this._rolRepository.save(objeto);
  }

}

