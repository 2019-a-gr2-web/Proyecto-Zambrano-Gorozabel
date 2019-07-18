import { IsArray, IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class ComicCreateDto{
  @IsEmpty()
  idComic:number;

  @IsNotEmpty()
  @IsString()
  nombreComic:string;

  @IsNotEmpty()
  @IsString()
  isbnComic:string;

  @IsNotEmpty()
  @IsString()
  imagenComic:string;

 /* @IsNotEmpty()
  genero:any;

  @IsNotEmpty()
  autor:any;*/
}
