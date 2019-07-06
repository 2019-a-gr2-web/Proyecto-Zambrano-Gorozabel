import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { EditorialEntity } from '../editorial/editorial.entity';
import { ComicEntity } from '../comic/comic.entity';
import { EditorialautorEntity } from '../editorialautor/editorialautor.entity';
import { EventoEntity } from '../evento/evento.entity';


@Entity('editorial_autor_comic')
export class EditorialautorcomicEntity{

  @PrimaryGeneratedColumn()
  idAutorEditorial:number;
  @ManyToOne(type=>ComicEntity, comic=>comic.autorEditorialComic)
  idComic: ComicEntity[]
  @ManyToOne(type=>EditorialautorEntity, editorialAutorCo=>editorialAutorCo.autorEdiComic)
  idEditorialAutorComic: EditorialautorEntity[]

  @ManyToMany(type => EventoEntity, evento => evento.edi)

  eve: EventoEntity[];
}