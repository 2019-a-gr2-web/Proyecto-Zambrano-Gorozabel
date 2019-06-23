import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsDate } from 'class-validator';

@Entity('evento')
export class EventoEntity{

  @PrimaryGeneratedColumn()
  idEvento:number;

  @Column({
    type:'varchar',
    length:50 ,
    name:'nombre_evento'
  })
  nombre:string;

  @Column({
    type:'varchar',
    length:255,
    name:'descripcion_evento'
  })
  descripcion:string;

  @Column({
    name:'fecha_evento'
  })
  @IsDate()
  fecha:Date;

}
