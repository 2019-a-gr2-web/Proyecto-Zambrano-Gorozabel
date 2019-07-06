import { IsDate, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class GeneroCreateDto{

  @IsEmpty()
  idGenero?:number;

  @IsNotEmpty()
  @IsString()
  nombreGenero:string;


  @IsOptional()
  @IsNumber()
  comic:number;



}