import { Controller } from '@nestjs/common';
import { ComicService } from './comic.service';

@Controller('vixstart/comic')
export class ComicController{
  constructor(private readonly _comicServices:ComicService){

  }
}
