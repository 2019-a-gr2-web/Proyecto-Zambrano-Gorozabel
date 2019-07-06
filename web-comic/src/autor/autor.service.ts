import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EditorialEntity } from '../editorial/editorial.entity';
import { Repository } from 'typeorm';
import { AutorEntity } from './autor.entity';

@Injectable()
export class AutorService{

  constructor(@InjectRepository(AutorEntity) private readonly _autorRepository: Repository<AutorEntity>,
              @InjectRepository(EditorialEntity) private readonly  _editorialRepository:Repository<EditorialEntity>) {
    const autorPrueba = new AutorEntity();


    console.log(autorPrueba);


    /*const objetoEntidad = this._autorRepository.create(autorPrueba);
    this._autorRepository
      .save(objetoEntidad)
      .then(
        (datos) => {
          console.log('Dato creado:', datos);
        }
      )
      .catch(
        (error) => {
          console.error('Error:', error);
        }
      );*/
  }



}
