import { ContactsService } from './contacts.service';
import { Contact } from './contact.entity';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    createContact(contact: Contact): Promise<Contact>;
    updateTag(contact: Contact): Promise<Contact>;
}
