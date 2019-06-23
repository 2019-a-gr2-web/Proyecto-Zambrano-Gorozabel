import { Controller } from '@nestjs/common';
import { EditorialService } from './editorial.service';

@Controller('vixstart/editorial')
export class EditorialController{
  constructor(private readonly _editorialServices:EditorialService){

  }
}
