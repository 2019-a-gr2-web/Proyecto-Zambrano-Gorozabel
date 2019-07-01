import { Controller } from '@nestjs/common';
import { CalificacioncomicService } from './calificacioncomic.service';


@Controller('vixstart/comic')
export class CalificacioncomicController{
  constructor(private readonly _calificacioncomicService:CalificacioncomicService){

  }
}