import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Project } from '../../projects/project.entity';
import { Category } from '../../categories/category.entity';
import { Tag } from '../../tags/tag.entity';
import { Company } from 'src/admin-features/companies/company.entity';
import { BaseExceptionFilter } from '@nestjs/core';
import { Contact } from 'src/contacts/contact.entity';
import { Country } from 'src/admin-features/countries/country.entity';

export class createContact1574798221692 implements MigrationInterface {
  private contactRepository = getRepository(Contact);
  private countryRepository = getRepository(Country);
  public async up(queryRunner: QueryRunner): Promise<any> {
    let contact: Contact = new Contact();
    contact.name = 'Ali';
    contact.lastName = 'Bougarne';
    contact.birthday = new Date('17/02/1989');
    contact.phones = ['+213778245824'];
    contact.slogan = '';
    contact.status = 'Work at home';
    contact.description =
      'Hello and welcome to my profile! I am a web developer with more than 06 years of experience, I have worked for major companies in Algeria such as AXA, Cevital Group, Air Algérie and others, this vast experience with web development has allowed me to deliver good quality projects. In the last few years I have been focusing on new front end technologies such as Vue js, a modern js framework with great potential.';
    contact.languages = ['Arabic', 'English', 'French'];
    contact.country = await this.countryRepository.findOne({name: "Algeria"})
    try {
      await this.contactRepository.save(contact);
    } catch (error) {
      throw error;
    }
  }
  public async down(queryRunner: QueryRunner): Promise<any> {}
}
