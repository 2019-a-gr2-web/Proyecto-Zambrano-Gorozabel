import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AutorEntity } from '../autor/autor.entity';
import { EditorialautorEntity } from '../editorialautor/editorialautor.entity';
import { EditorialautorcomicEntity } from '../editorialautorcomic/editorialautorcomic.entity';
import { LugargeograficoEntity } from '../lugargeografico/lugargeografico.entity';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { CalificacioncomicEntity } from '../calificacioncomic/calificacioncomic.entity';
import { GeneroEntity } from '../genero/genero.entity';

@Entity('comic')
export class ComicEntity{

  @PrimaryGeneratedColumn()
  idComic:number;

  @Column({
    type: 'varchar',
    length:50,
    name:'nombre_comic'
  })
  nombreComic:string;
  @Column({
    type: 'varchar',
    length:20,
    name:'isbn_comic'
  })
  isbnComic:string;
  @Column({
    type: 'varchar',
    length:255,
    name:'imagen_comic'
  })
  imagenComic:string;

  @Column({
    type:'boolean',
    name:'estado_comic'
  })
  estadoComic:boolean;

  @ManyToMany(type => GeneroEntity, genero=>genero.comic)
  genero:ComicEntity[];

  @OneToMany(type=>EditorialautorcomicEntity, autorEditorialComic => autorEditorialComic.idComic)
  autorEditorialComic:EditorialautorcomicEntity[];
  @ManyToMany(type => UsuarioEntity, usuario => usuario.comic)
  usuario: UsuarioEntity[];

  @OneToMany(type=>CalificacioncomicEntity, calificacionComic => calificacionComic.idComic)
  calificacionComic:CalificacioncomicEntity[];

}
