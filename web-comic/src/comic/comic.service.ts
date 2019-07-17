import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ComicEntity } from './comic.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ComicService{
  constructor(@InjectRepository(ComicEntity) private readonly _comicRepository:Repository<ComicEntity>){

  }

  crear(comic: ComicEntity):Promise<ComicEntity>{
    const objEntity=this._comicRepository.create(comic);
    return this._comicRepository.save(comic);
  }

  listar(parametro):Promise<ComicEntity[]>{
    return this._comicRepository.find(parametro);
  }

}
