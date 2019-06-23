import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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

  @OneToMany(type=>AutorEntity,
    autor=>autor.editorial)
  autor:number;

}
