import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsDate } from 'class-validator';

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

}