import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AutorEntity } from '../autor/autor.entity';
import { EditorialautorEntity } from '../editorialautor/editorialautor.entity';
import { EditorialautorcomicEntity } from '../editorialautorcomic/editorialautorcomic.entity';
import { LugargeograficoEntity } from '../lugargeografico/lugargeografico.entity';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { ComicEntity } from '../comic/comic.entity';
import { EventoEntity } from '../evento/evento.entity';

@Entity('calificacion_evento')
export class CalificacioneventoEntity{

  @PrimaryGeneratedColumn()
  idCalificacionEvento:number;

  @Column({
    type: 'integer',
    name:'calificacion_evento'
  })
  calificacion:number;

  @ManyToOne(type=>EventoEntity, evento=>evento.calificacionEvento)
  idEvento: EventoEntity[]

  @ManyToOne(type=>UsuarioEntity, usuario=>usuario.calificacionEvento)
  idUsuario: UsuarioEntity[]

}
