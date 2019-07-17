import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EditorialEntity } from '../editorial/editorial.entity';
import { ComicEntity } from '../comic/comic.entity';
import { EditorialautorEntity } from '../editorialautor/editorialautor.entity';
import { LugargeograficoEntity } from '../lugargeografico/lugargeografico.entity';

@Entity('autor')
export class AutorEntity{

  @PrimaryGeneratedColumn()
  idAutor:number;
  @Column({
    type:'varchar',
    length:50,
    name:'id-autor'
  })
  identAutor: string;
  @Column({
    type:'varchar',
    length:50,
    name:'nombre_autor'
  })
  nombreAutor:string;


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
    name:'estado_trabajando_autor',
    default: false
  })
  estadoTrabajandoAutor:boolean;

  @OneToMany(type=>EditorialautorEntity, autorEditorial => autorEditorial.idAutor)
  editorialAutor:EditorialautorEntity[];

  @ManyToOne(type=>LugargeograficoEntity, ciudad => ciudad.idAutor)
  ciudadAutor:LugargeograficoEntity[];

}
