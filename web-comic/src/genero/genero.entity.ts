import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ComicEntity } from '../comic/comic.entity';

@Entity('genero')
export class GeneroEntity{

  @PrimaryGeneratedColumn()
  idGenero:number;

  @Column({
    type:'varchar',
    length:50,
    name:'nombre_genero'
  })
  nombre:string;

  @ManyToMany(type => ComicEntity, comic=>comic.genero)
  @JoinTable()
  comic:ComicEntity[];

}
