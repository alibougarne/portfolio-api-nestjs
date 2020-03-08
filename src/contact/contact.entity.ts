import { Entity, Column, OneToMany, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Length } from 'class-validator';
import { Common } from '../shared/entities/common';
import { Country } from 'src/countries/country.entity';
import { Education } from 'src/secondary-features/educations/education.entity';

@Entity()
export class Contact extends Common {
  @Column()
  @Length(1, 50)
  name: string;

  @Column()
  @Length(1, 50)
  lastName: string;

  @Column()
  @Length(1, 200)
  phones: string;

  @Column()
  @Length(1, 200)
  languages: string;

  @Column({
    type: "date"
  })
  @Length(1, 50)
  birthday: Date;

  @OneToOne(type => Country)
  @JoinColumn()
  country: Country;


  @ManyToMany(
    type => Education,
    education => education.contacts,
  )
  @JoinTable({ name: 'contacts_educations' })
  educations: Education[];
}
