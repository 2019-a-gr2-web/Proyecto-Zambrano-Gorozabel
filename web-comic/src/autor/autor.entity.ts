import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { EditorialEntity } from '../editorial/editorial.entity';
import { ComicEntity } from '../comic/comic.entity';

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

  @ManyToMany(type=>EditorialEntity, editorial=>editorial.autor)
  editorial:EditorialEntity[];

}
