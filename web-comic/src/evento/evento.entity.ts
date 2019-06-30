import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsDate } from 'class-validator';
import { LugargeograficoEntity } from '../lugargeografico/lugargeografico.entity';
import { CalificacioncomicEntity } from '../calificacioncomic/calificacioncomic.entity';
import { CalificacioneventoEntity } from '../calificacionevento/calificacionevento.entity';
import { EditorialEntity } from '../editorial/editorial.entity';
import { EditorialautorcomicEntity } from '../editorialautorcomic/editorialautorcomic.entity';

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
    name:'imagen_evento'
  })
  imagenEvento:string;

  @Column({
    type:'date',
    name:'fecha_evento',
    default:'2019-09-19'
  })
  fecha:Date;
  @ManyToMany(type => LugargeograficoEntity, lug => lug.eve)
  lug1: LugargeograficoEntity[];
  @ManyToMany(type => LugargeograficoEntity, lug => lug.edi)
  lug: LugargeograficoEntity[];

  @OneToMany(type=>CalificacioneventoEntity, calificacionEvento => calificacionEvento.idEvento)
  calificacionEvento:CalificacioneventoEntity[];

  @ManyToMany(type => EditorialautorcomicEntity, edi => edi.eve)
  @JoinTable()
  edi: EditorialautorcomicEntity[];


}
