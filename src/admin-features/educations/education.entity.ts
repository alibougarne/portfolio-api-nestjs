import {
  Entity,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Length, IsEmpty } from 'class-validator';
import { Common } from '../../shared/entities/common';
import { Country } from '../../admin-features/countries/country.entity';
import { Contact } from '../../contacts/contact.entity';

@Entity("educations")
export class Education extends Common {
  @Column()
  @Length(1, 200)
  diplomeName: string;

  @Column()
  @Length(1, 200)
  establishmentName: string;

  @Column({
    nullable: true,
    default: 'Lorum Ipsum sit amet Lorum Ipsum sit amet Lorum Ipsum sit amet'
  })
  @IsEmpty()
  @Length(0, 1000)
  description: string;

  // @Column("simple-array")
  // social: string[];

  @Column()
  webSite: string;

  @Column({
    type: 'date',
  })
  beginDate: Date;

  @Column({
    type: 'date',
    default: null,
  })
  endDate: Date;

  @ManyToOne(
    type => Country,
    country => country.educations,
  )
  country: Country;

  // @ManyToMany(
  //   type => Contact,
  //   contact => contact.educations,
  // )
  // contacts: Contact[];
}
