import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EditorialEntity } from './editorial.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EditorialService {

  constructor(@InjectRepository(EditorialEntity)
              private readonly _editorialRepository: Repository<EditorialEntity>,) {

  }
}
