import { Entity, Column, OneToMany, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Length } from 'class-validator';
import { Common } from 'src/shared/entities/common';
import { Country } from 'src/countries/country.entity';
import { Contact } from 'src/contact/contact.entity';
import { Company } from 'src/companies/company.entity';

@Entity()
export class Job extends Common {

  @Column()
  @Length(1, 100)
  jobTitle: string;

  @Column()
  mission: string;

  @Column({
    type: "date"
  })
  beginDate: Date;

  @Column({
    type: "date",
    default:null
  })
  endDate: Date;

  @OneToOne(type => Country)
  @JoinColumn()
  country: Country;

  @OneToOne(type => Company)
  @JoinColumn()
  company: Company;

  @ManyToMany(
    type => Contact,
    contact => contact.jobs,
  )
  contacts: Contact[];
 
}
