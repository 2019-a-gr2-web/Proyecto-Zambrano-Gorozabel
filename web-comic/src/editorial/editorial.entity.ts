import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AutorEntity } from '../autor/autor.entity';
import { EditorialautorEntity } from '../editorialautor/editorialautor.entity';
import { LugargeograficoEntity } from '../lugargeografico/lugargeografico.entity';

@Entity('editorial')
export class EditorialEntity{

  @PrimaryGeneratedColumn()
  idEditorial:number

  @Column({
    type:'varchar',
    length:50,
    name:'nombre_editorial'
  })
  nombreEditorial:string;
  @Column({
    type:'varchar',
    length:60,
    name:'imagen_editorial',
    nullable:true
  })
  imagenEditorial:string;

  @OneToMany(type=>EditorialautorEntity, editorialAutor => editorialAutor.idEditorial)
  editorialAutor:EditorialautorEntity[];

  @ManyToMany(type => LugargeograficoEntity, lug => lug.edi)
  lug: LugargeograficoEntity[];




}
