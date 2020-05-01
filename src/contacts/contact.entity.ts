import { Entity, Column, OneToMany, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Length } from 'class-validator';
import { Common } from '../shared/entities/common';
import { Country } from 'src/admin-features/countries/country.entity';
import { Education } from 'src/admin-features/educations/education.entity';
import { Job } from 'src/admin-features/jobs/job.entity';

@Entity("contacts")
export class Contact extends Common {
  @Column()
  @Length(1, 50)
  name: string;

  @Column()
  @Length(1, 50)
  lastName: string;

  @Column()
  slogan: string;

  @Column()
  description: string;

  @Column("simple-array")
  phones: string[];

  @Column("simple-array")
  languages: string[];

  @Column({
    type: "date"
  })
  @Length(1, 50)
  birthday: Date;

  @OneToOne(type => Country)
  @JoinColumn()
  country: Country;


  // @ManyToMany(
  //   type => Education,
  //   education => education.contacts,
  // )
  // @JoinTable({ name: 'contacts_educations' })
  // educations: Education[];

  // @ManyToMany(
  //   type => Job,
  //   job => job.contacts,
  // )
  // @JoinTable({ name: 'contacts_jobs' })
  // jobs: Job[];
}
