import { Contact } from './contact.entity';
import { Repository } from 'typeorm';
export declare class ContactsService {
    private readonly contactsRepository;
    constructor(contactsRepository: Repository<Contact>);
    saveContact(contact: Contact): Contact | PromiseLike<Contact>;
}
