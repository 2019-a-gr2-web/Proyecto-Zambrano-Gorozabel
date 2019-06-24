import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EditorialEntity } from './editorial.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EditorialService {

  constructor(@InjectRepository(EditorialEntity)
              private readonly _editorialRepository: Repository<EditorialEntity>,) {
    const editorialPrueba = new EditorialEntity();
    editorialPrueba.nombre="SHUESHIA";

  /*  const objetoEntidad = this._editorialRepository.create(editorialPrueba);
    this._editorialRepository
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

  crear(nuevaEditorial:EditorialEntity):Promise<EditorialEntity>{
    const objetoEntidad = this._editorialRepository
      .create(nuevaEditorial);
    return this._editorialRepository.save(objetoEntidad);
  }
  buscar(parametrosBusqueda?):Promise<EditorialEntity[]>{
    return this._editorialRepository.find(parametrosBusqueda);
  }
}
