import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EditorialEntity } from '../editorial/editorial.entity';
import { ComicEntity } from '../comic/comic.entity';
import { EditorialautorEntity } from '../editorialautor/editorialautor.entity';

@Entity('autor')
export class AutorEntity{

  @PrimaryGeneratedColumn()
  idAutor:number;

  @Column({
    type:'varchar',
    length:50,
    name:'nombre_autor'
  })
  nombre:string;

  @Column({
    type:'varchar',
    length:50,
    name:'ciudad_autor'
  })
  ciudad:string;
  @Column({
    type:'date',
    name:'fecha_nacimiento_autor'
  })
  fecha_nacimiento:Date;

  @Column({
    type:'varchar',
    length:60,
    name:'imagen_autor',
    nullable:true
  })
  imagen:string;
  @Column({
    type:'boolean',
    name:'estado_trabajando_autor'
  })
  estadoTrabajando:boolean;
  @Column({
    type:'integer',
    name:'num_capitulos_comic',
  })
  numCapitulos:number;
  @OneToMany(type=>EditorialautorEntity, autorEditorial => autorEditorial.idAutor)
  autorEditorial:EditorialautorEntity[];

}
