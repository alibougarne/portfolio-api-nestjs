import { Controller } from '@nestjs/common';
import { ContactsService } from './contacts.service';

@Controller('contact')
export class ContactsController {
    constructor(private readonly contact:ContactsService){
     }
}
