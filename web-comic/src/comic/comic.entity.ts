import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AutorEntity } from '../autor/autor.entity';

@Entity('comic')
export class ComicEntity{

  @PrimaryGeneratedColumn()
  idComic:number;

  @Column({
    type: 'varchar',
    length:50,
    name:'nombre_comic'
  })
  nombre:string;

  @Column({
    type:'varchar',
    length:255,
    name:'descripcion_comic'
  })
  descripcion:string;

  @ManyToMany(type=>AutorEntity)
  @JoinTable()
  autorId:AutorEntity;

}
