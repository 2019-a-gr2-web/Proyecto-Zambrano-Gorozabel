import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class ComicCreateDto{
  @IsEmpty()
  idComic:number;

  @IsNotEmpty()
  @IsString()
  nombreComic:string;


}
