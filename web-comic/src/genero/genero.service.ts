import { Injectable } from '@nestjs/common';
import { EventoEntity } from '../evento/evento.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { GeneroEntity } from './genero.entity';

@Injectable()
export class GeneroService{
  constructor(@InjectRepository(GeneroEntity)
              private readonly _generoRepository: Repository<GeneroEntity>,) {
  }

  crear(nuevoGenero: GeneroEntity):Promise<GeneroEntity> {
    const objetoEntidad= this._generoRepository.create(nuevoGenero);
    return this._generoRepository.save(objetoEntidad);//promesa
  }
}
