import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { UsuarioEntity } from '../usuario/usuario.entity';

@Unique(["nombreRol"])
@Entity('rol')
export class RolEntity{

  @PrimaryGeneratedColumn()
  idRol:number;

  @Column({
    type:'varchar',
    length:50,
    name:'nombre_rol'
  })
  nombreRol:string;
  @ManyToMany(type => UsuarioEntity, usuario=>usuario.rol)
  usuario:UsuarioEntity[];
}
