import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class RolUpdateDto{

  @IsEmpty()
  idRol:number;

  @IsNotEmpty()
  @IsString()
  nombreRol:string

}
