import { Entity, Column, OneToMany } from 'typeorm';
import { Length } from 'class-validator';
import { Common } from '../../shared/entities/common';
import { Company } from 'src/secondary-features/companies/company.entity';

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
}
