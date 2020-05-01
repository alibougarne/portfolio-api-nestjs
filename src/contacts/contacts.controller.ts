import { Controller, Post,Put, Body } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Contact } from './contact.entity';

@Controller('contacts')
export class ContactsController {
    constructor(private readonly contactsService:ContactsService){
     }

     @Post()
     async createContact(@Body() contact: Contact): Promise<Contact> {
       return this.contactsService.saveContact(contact);
     }

     @Put()
     async updateContact(@Body() contact: Contact): Promise<Contact> {
       return this.contactsService.saveContact(contact);
     }
}
