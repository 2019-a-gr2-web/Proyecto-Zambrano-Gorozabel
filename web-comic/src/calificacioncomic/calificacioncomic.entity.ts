import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AutorEntity } from '../autor/autor.entity';
import { EditorialautorEntity } from '../editorialautor/editorialautor.entity';
import { EditorialautorcomicEntity } from '../editorialautorcomic/editorialautorcomic.entity';
import { LugargeograficoEntity } from '../lugargeografico/lugargeografico.entity';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { ComicEntity } from '../comic/comic.entity';

@Entity('calificacion_comic')
export class CalificacioncomicEntity{

  @PrimaryGeneratedColumn()
  idCalificacionComic:number;

  @Column({
    type: 'integer',
    name:'calificacion_comic'
  })
  calificacion:number;

  @ManyToOne(type=>ComicEntity, comic=>comic.calificacionComic)
  idComic: ComicEntity[]

  @ManyToOne(type=>UsuarioEntity, usuario=>usuario.calificacionComic)
  idUsuario: UsuarioEntity[]

}
