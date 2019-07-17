import { Injectable } from '@nestjs/common';
import { EditorialEntity } from '../editorial/editorial.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EventoEntity } from './evento.entity';

@Injectable()
export class EventoService{
  constructor(@InjectRepository(EventoEntity)
              private readonly _eventoRepository: Repository<EventoEntity>,) {
  }

  crear(nuevoEvento: EventoEntity):Promise<EventoEntity> {
    const objetoEntidad= this._eventoRepository.create(nuevoEvento);
    return this._eventoRepository.save(objetoEntidad);//promesa
  }
}
