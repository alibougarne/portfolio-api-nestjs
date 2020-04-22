import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { Contact } from './contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contact]),MulterModule.register({
    dest: './client/resources/contacts',
  })],
  controllers: [ContactsController],
  providers: [ContactsService]
})
export class ContactsModule {}
