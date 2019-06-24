import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AutorEntity } from '../autor/autor.entity';

@Entity('editorial')
export class EditorialEntity{

  @PrimaryGeneratedColumn()
  idEditorial:number

  @Column({
    type:'varchar',
    length:50,
    name:'nombre_editorial'
  })
  nombre:string;

  @ManyToMany(type=>AutorEntity, autor=>autor.editorial)
  @JoinTable()
  autor:number;


}
