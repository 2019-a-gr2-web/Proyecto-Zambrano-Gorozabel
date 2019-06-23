import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rol')
export class RolEntity{

  @PrimaryGeneratedColumn()
  idRol:number;

  @Column({
    type:'varchar',
    length:50,
    name:'nombre_rol'
  })
  nombre:string;

}
