import { Controller, Post,Patch, UseInterceptors, Body, UploadedFile } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Contact } from './contact.entity';

@Controller('contacts')
export class ContactsController {
    constructor(private readonly contactsService:ContactsService){
     }

     @Post('create')
     async createContact(@Body() contact: Contact): Promise<Contact> {
       return this.contactsService.saveContact(contact);
     }

     @Patch('update')
     async updateTag(@Body() contact: Contact): Promise<Contact> {
       return this.contactsService.saveContact(contact);
     }
}
