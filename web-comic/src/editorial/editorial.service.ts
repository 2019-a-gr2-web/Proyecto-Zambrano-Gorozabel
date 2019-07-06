import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EditorialEntity } from './editorial.entity';
import { Repository } from 'typeorm';
import { AutorEntity } from '../autor/autor.entity';

@Injectable()
export class EditorialService {

  constructor(@InjectRepository(EditorialEntity)
              private readonly _editorialRepository: Repository<EditorialEntity>,) {
  }

  crear(nuevaEditorial: EditorialEntity):Promise<EditorialEntity> {
    const objetoEntidad= this._editorialRepository.create(nuevaEditorial);
    return this._editorialRepository.save(objetoEntidad);//promesa
  }
}
