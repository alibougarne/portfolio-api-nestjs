import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './contact.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactsService {

  constructor(
    @InjectRepository(Contact)
    private readonly contactsRepository: Repository<Contact>,
  ) {}

  saveContact(contact: Contact): Promise<Contact> {
    return this.contactsRepository.save(contact);
  }
  
}
