import { IsDate, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class EventoCreateDto{

  @IsEmpty()
  idEvento?:number;

  @IsNotEmpty()
  @IsString()
  nombreEvento:string;

  @IsNotEmpty()
  @IsDate()
  fechaEvento: Date;


  @IsOptional()
  @IsNumber()
  lug:number;

  @IsOptional()
  @IsNumber()
  lug1:number;

  @IsOptional()
  @IsNumber()
  edi:number;

  @IsOptional()
  @IsNumber()
  calificacionEvento:number;

  @IsOptional()
  @IsString()
  imagenEvento:string;
}