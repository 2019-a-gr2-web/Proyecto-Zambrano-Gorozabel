import { IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UsuarioCreateDto{
  @IsEmpty()
  idUsuario:number;

  @IsNotEmpty()
  @IsString()
  nombreUsuario:string;

  @IsNotEmpty()
  @IsString()
  imagenUsuario:string;

  @IsString()
  @IsNotEmpty()
  cedulaUsuario:string;

  @IsString()
  @IsEmail()
  emailUsuario:string;

  @IsString()
  @IsNotEmpty()
  passwordUsuario:string;

  @IsOptional()
  @IsNumber()
  rol:number;

  @IsOptional()
  @IsNumber()
  comic:number;

  @IsOptional()
  @IsNumber()
  calificacionComic:number;

  @IsOptional()
  @IsNumber()
  calificacionEvento:number;

}
