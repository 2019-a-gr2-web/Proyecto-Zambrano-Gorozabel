import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsDate } from 'class-validator';
import { EditorialEntity } from '../editorial/editorial.entity';
import { AutorEntity } from '../autor/autor.entity';
import { EditorialautorcomicEntity } from '../editorialautorcomic/editorialautorcomic.entity';

@Entity('editorial_autor')
export class EditorialautorEntity{

  @PrimaryGeneratedColumn()
  idAutorEditorial:number;


  @ManyToOne(type=>EditorialEntity, editorial=>editorial.editorialAutor)
  idEditorial: EditorialEntity[];
  @ManyToOne(type=>AutorEntity, autor=>autor.editorialAutor)
  idAutor: AutorEntity[];
  @OneToMany(type=>EditorialautorcomicEntity, autorEdiComic => autorEdiComic.idEditorialAutorComic)
  autorEdiComic:EditorialautorcomicEntity[];
}
