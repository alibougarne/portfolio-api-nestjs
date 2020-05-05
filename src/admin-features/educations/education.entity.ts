import {
  Entity,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Length } from 'class-validator';
import { Common } from 'src/shared/entities/common';
import { Country } from 'src/admin-features/countries/country.entity';
import { Contact } from 'src/contacts/contact.entity';

@Entity("educations")
export class Education extends Common {
  @Column()
  @Length(1, 200)
  diplomeName: string;

  @Column()
  @Length(1, 200)
  establishmentName: string;

  @Column()
  description: string;

  @Column()
  social: string;

  @Column({
    type: 'date',
  })
  beginDate: Date;

  @Column({
    type: 'date',
    default: null,
  })
  endDate: Date;

  @OneToOne(type => Country)
  @JoinColumn()
  country: Country;

  // @ManyToMany(
  //   type => Contact,
  //   contact => contact.educations,
  // )
  // contacts: Contact[];
}
