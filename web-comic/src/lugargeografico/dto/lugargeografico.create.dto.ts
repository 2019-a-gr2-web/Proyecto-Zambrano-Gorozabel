import { IsDate, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class LugargeograficoCreateDto {

  @IsEmpty()
  idLugarGeografico?: number;

  @IsNotEmpty()
  @IsString()
  nombreLugarGeografico: string;

  @IsOptional()
  @IsNumber()
  fkLugarGeo: number;
  @IsOptional()
  @IsNumber()
  lugarg: number;

  @IsOptional()
  @IsNumber()
  edi: number;
  @IsOptional()
  @IsNumber()
  eve: number;
  @IsOptional()
  @IsNumber()
  idAutor: number;



}