import { IsArray, IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class ComicUpdateDto{
  @IsNotEmpty()
  idComic:number;

  @IsNotEmpty()
  @IsString()
  nombreComic:string;

  @IsNotEmpty()
  @IsString()
  descripcionComic:string;

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
