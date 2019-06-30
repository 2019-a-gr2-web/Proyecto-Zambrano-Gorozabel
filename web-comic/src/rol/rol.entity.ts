import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioEntity } from '../usuario/usuario.entity';

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
  @ManyToMany(type => UsuarioEntity, usuario=>usuario.rol)
  usuario:UsuarioEntity[];
}
