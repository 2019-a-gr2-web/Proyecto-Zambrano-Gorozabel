import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { IsEmail } from 'class-validator';
import { RolEntity } from '../rol/rol.entity';
import { EventoEntity } from '../evento/evento.entity';
import { EditorialEntity } from '../editorial/editorial.entity';
import { ComicEntity } from '../comic/comic.entity';
import { CalificacioncomicEntity } from '../calificacioncomic/calificacioncomic.entity';
import { CalificacioneventoEntity } from '../calificacionevento/calificacionevento.entity';


@Unique(["cedulaUsuario"])
@Unique(["emailUsuario"])
@Unique(["nombreUsuario"])
@Entity('usuario')
export class UsuarioEntity{

  @PrimaryGeneratedColumn()
  idUsuario:number;

  @Column({
    type:'varchar',
    length:50,
    name:'nombre_usuario'
  })
  nombreUsuario:string;
  @Column({
    type:'varchar',
    length:255,
    name:'imagen_usuario'
  })
  imagenUsuario:string;
  @Column({
    type:'varchar',
    length:13,
    name:'cedula_usuario'
  })
  cedulaUsuario:string;
  @Column({
    name:'email_usuario'
  })
  @IsEmail()
  emailUsuario:string;

  @Column({
    type:'varchar',
    length:50,
    name:'pass_usuario'
  })
  passwordUsuario:string;

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
