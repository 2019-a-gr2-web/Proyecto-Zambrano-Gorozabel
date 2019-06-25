import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail } from 'class-validator';
import { RolEntity } from '../rol/rol.entity';
import { EventoEntity } from '../evento/evento.entity';
import { EditorialEntity } from '../editorial/editorial.entity';
import { ComicEntity } from '../comic/comic.entity';
import { CalificacioncomicEntity } from '../calificacioncomic/calificacioncomic.entity';
import { CalificacioneventoEntity } from '../calificacionevento/calificacionevento.entity';

@Entity('usuario')
export class UsuarioEntity{

  @PrimaryGeneratedColumn()
  idUsuario:number;

  @Column({
    type:'varchar',
    length:50,
    name:'nombre_usuario'
  })
  nombre:string;
  @Column({
    type:'varchar',
    length:255,
    name:'imagen_usuario'
  })
  imagen:string;
  @Column({
    type:'varchar',
    length:13,
    name:'cedula_usuario'
  })
  cedula:string;
  @Column({
    name:'email_usuario'
  })
  @IsEmail()
  email:string;

  @Column({
    type:'varchar',
    length:50,
    name:'pass_usuario'
  })
  password:string;

  @ManyToMany(type => RolEntity, rol=>rol.usuario)
  @JoinTable()
  rol:RolEntity[];
  @ManyToMany(type => ComicEntity, comic => comic.usuario)
  @JoinTable()
  comic: ComicEntity[];

  @OneToMany(type=>CalificacioncomicEntity, calificacionComic => calificacionComic.idUsuario)
  calificacionComic:CalificacioncomicEntity[];

  @OneToMany(type=>CalificacioneventoEntity, calificacionEvento => calificacionEvento.idUsuario)
  calificacionEvento:CalificacioneventoEntity[];
}
