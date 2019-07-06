import { IsBoolean, IsDate, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class AutorCretateDto{
  @IsEmpty()
  idAutor:number;
  @IsNotEmpty()

  identAutor: string;
  @IsNotEmpty()
  @IsString()
  nombreAutor: string;

  @IsNotEmpty()
  @IsDate()
  fechaNacimientoAutor: Date;

  @IsOptional()
  @IsNumber()
  ciudadAutor: number;

  @IsOptional()
  @IsNumber()
  autorEditorial: number;

  @IsString()
  @IsOptional()
  imagenAutor: string;

  @IsBoolean()
  @IsOptional()
  estadoTrabajandoAutor: boolean;




}