import { Injectable } from '@nestjs/common';
import { GeneroEntity } from '../genero/genero.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LugargeograficoEntity } from './lugargeografico.entity';

@Injectable()
export class LugargeograficoService{
  constructor(@InjectRepository(LugargeograficoEntity)
              private readonly _lugarRepository: Repository<LugargeograficoEntity>,) {
  }

  crear(nuevoLugar: LugargeograficoEntity):Promise<LugargeograficoEntity> {
    const objetoEntidad= this._lugarRepository.create(nuevoLugar);
    return this._lugarRepository.save(objetoEntidad);//promesa
  }
}