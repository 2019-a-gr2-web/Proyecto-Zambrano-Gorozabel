import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail } from 'class-validator';
import { RolEntity } from '../rol/rol.entity';

@Entity('usuario')
export class UsuarioEntity{

  @PrimaryGeneratedColumn()
  idUsuario:number;

  @Column({
    type:'varchar',
    length:50,
    name:'nombre_usuario'
  })
  nombre:string;

  @Column({
    name:'email_usuario'
  })
  @IsEmail()
  email:string;

  @Column({
    type:'varchar',
    length:50,
    name:'pass_usuario'
  })
  password:string;

  @ManyToMany(type => RolEntity)
  @JoinTable()
  rolId:RolEntity;

}
