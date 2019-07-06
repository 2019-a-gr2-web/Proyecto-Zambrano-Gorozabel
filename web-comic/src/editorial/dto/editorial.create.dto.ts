import { IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class EditorialCreateDto{

  @IsEmpty()
  idEditorial?:number;

  @IsNotEmpty()
  @IsString()
  nombreEditorial:string;

  @IsOptional()
  @IsNumber()
  lug:number;

  @IsOptional()
  @IsNumber()
  editorialAutor:number;

}