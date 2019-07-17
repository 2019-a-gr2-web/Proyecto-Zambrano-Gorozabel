import { IsBoolean, IsDate, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class AutorUpdateDto {
  @IsEmpty()
  idAutor: number;

  @IsNotEmpty()
  @IsString()
  nombreAutor: string;

  @IsNotEmpty()
  @IsDate()
  fechaNacimientoAutor: Date;

  @IsOptional()
  @IsNumber()
  autorEditorial: number;

  @IsOptional()
  @IsNumber()
  ciudadAutor: number;

  @IsString()
  @IsOptional()
  imagenAutor: string;

  @IsBoolean()
  @IsOptional()
  estadoTrabajandoAutor: string;
}