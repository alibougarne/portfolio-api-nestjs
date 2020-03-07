import { Entity, Column, OneToMany } from 'typeorm';
import { Length } from 'class-validator';
import { Common } from '../shared/entities/common';
import { Company } from 'src/companies/company.entity';

@Entity()
export class Country extends Common {
  @Column()
  @Length(1, 50)
  name: string;

  @Column()
  @Length(1, 5)
  code: string;

  @Column({
    name: 'flag-path',
  })
  @Length(1, 100)
  flagPath: string;

  @OneToMany(
    () => Company,
    company => company.country,
  )
  companies: Company[];
}
