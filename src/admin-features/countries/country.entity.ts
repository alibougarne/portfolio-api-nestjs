import { Entity, Column, OneToMany } from 'typeorm';
import { Length } from 'class-validator';
import { Common } from '../../shared/entities/common';
import { Company } from '../../admin-features/companies/company.entity';
import { Job } from '../jobs/job.entity';
import { Education } from '../educations/education.entity';

@Entity("countries")
export class Country extends Common {
  @Column()
  @Length(1, 50)
  name: string;

  @Column()
  @Length(1, 5)
  code: string;

  @OneToMany(
    () => Company,
    company => company.country,
  )
  companies: Company[];

  @OneToMany(
    () => Job,
    job => job.country,
  )
  jobs: Company[];

  @OneToMany(
    () => Education,
    education => education.country,
  )
  educations: Education[];
}
  