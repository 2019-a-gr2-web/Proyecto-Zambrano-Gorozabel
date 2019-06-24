import { IsEmpty, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class EditorialCreateDto{

  @IsEmpty()
  idEditorial?:number;

  @IsNotEmpty()
  @IsString()
  nombre:string;

  @IsNotEmpty()
  @IsNumber()
  autor:number;

}