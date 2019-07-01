import { Controller } from '@nestjs/common';
import { EditorialautorcomicService } from './editorialautorcomic.service';



@Controller('vixstart/evento')
export class EditorialautorcomicController{
  constructor(private readonly _editorialautorcomicService:EditorialautorcomicService){

  }
}
