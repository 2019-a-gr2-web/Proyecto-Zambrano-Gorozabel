import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsDate } from 'class-validator';
import { EditorialEntity } from '../editorial/editorial.entity';
import { JoinTable } from 'typeorm/decorator/relations/JoinTable';
import { EventoEntity } from '../evento/evento.entity';

@Entity('lugar_geografico')
export class LugargeograficoEntity{

  @PrimaryGeneratedColumn()
  idLugarGeografico:number;

  @Column({
    type:'varchar',
    length:60 ,
    name:'nombreLugarGeografico'
  })
  nombreLugarGeografico:string;

  @OneToMany(type=>LugargeograficoEntity, lugarg => lugarg.idLugarGeografico)
  lugarg:LugargeograficoEntity[];
  @ManyToOne( type => LugargeograficoEntity, lugarg=>lugarg.lugarg)
  fkLugarGeo: LugargeograficoEntity;

  @ManyToMany(type => EditorialEntity, edi => edi.lug)
  @JoinTable()
  edi: EditorialEntity[];
  @ManyToMany(type => EventoEntity, eve => eve.lug1)
  @JoinTable()
  eve: EditorialEntity[];

}