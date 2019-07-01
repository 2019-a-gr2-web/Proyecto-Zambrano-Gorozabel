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
  nombreAutor:string;

  @Column({
    type:'varchar',
    length:50,
    name:'ciudad_autor'
  })
  ciudadAutor:string;
  @Column({
    type:'date',
    name:'fecha_nacimiento_autor'
  })
  fechaNacimientoAutor:Date;

  @Column({
    type:'varchar',
    length:60,
    name:'imagen_autor',
    nullable:true
  })
  imagenAutor:string;
  @Column({
    type:'boolean',
    name:'estado_trabajando_autor'
  })
  estadoTrabajandoAutor:boolean;

  @OneToMany(type=>EditorialautorEntity, autorEditorial => autorEditorial.idAutor)
  autorEditorial:EditorialautorEntity[];

}
