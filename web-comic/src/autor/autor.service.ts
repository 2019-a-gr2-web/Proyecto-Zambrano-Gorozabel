import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EditorialEntity } from '../editorial/editorial.entity';
import { Repository } from 'typeorm';
import { AutorEntity } from './autor.entity';

@Injectable()
export class AutorService{

  constructor(@InjectRepository(AutorEntity) private readonly _autorRepository: Repository<AutorEntity>,
              @InjectRepository(EditorialEntity) private readonly  _editorialRepository:Repository<EditorialEntity>) {

  }
  crear(nuevoAutor: AutorEntity):Promise<AutorEntity> {
    const objetoEntidad= this._autorRepository.create(nuevoAutor);
    return this._autorRepository.save(objetoEntidad);//promesa
  }

  listar(parametros?):Promise<AutorEntity[]>{
    return this._autorRepository.find(parametros);
  }


}
