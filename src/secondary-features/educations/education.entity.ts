import { Entity, Column, OneToMany, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Length } from 'class-validator';
import { Common } from 'src/shared/entities/common';
import { Country } from 'src/countries/country.entity';
import { Contact } from 'src/contact/contact.entity';

@Entity()
export class Education extends Common {

  @Column()
  @Length(1, 50)
  diplomeName: string;

  @Column()
  @Length(1, 50)
  establishementName: string;

  @Column({
    type: "date"
  })
  @Length(1, 50)
  beginDate: Date;

  @Column({
    type: "date",
    default:null
  })
  @Length(1, 50)
  endDate: Date;

  @OneToOne(type => Country)
  @JoinColumn()
  country: Country;

  @ManyToMany(
    type => Contact,
    contact => contact.educations,
  )
  @JoinTable({ name: 'contacts_educations' })
  contacts: Contact[];
 
}
