import { Entity, Column, OneToMany, OneToOne, JoinColumn, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { Length } from 'class-validator';
import { Common } from '../../shared/entities/common';
import { Country } from '../../admin-features/countries/country.entity';
import { Company } from '../../admin-features/companies/company.entity';
import { Contact } from '../../contacts/contact.entity';


@Entity("jobs")
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

  @ManyToOne(
    type => Country,
    country => country.jobs,
  )
  country: Country;

  @OneToOne(type => Company)
  @JoinColumn()
  company: Company;

  // @ManyToMany(
  //   type => Contact,
  //   contact => contact.jobs,
  // )
  // contacts: Contact[];
 
}
