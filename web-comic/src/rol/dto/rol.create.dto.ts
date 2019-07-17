import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class RolCreateDto{

  @IsEmpty()
  idRol:number;

  @IsNotEmpty()
  @IsString()
  nombreRol:string

}
