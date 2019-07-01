import { Controller } from '@nestjs/common';
import { EditorialautorService } from './editorialautor.service';


@Controller('vixstart/evento')
export class EditorialautorController{
  constructor(private readonly _editorialautorService:EditorialautorService){

  }
}
