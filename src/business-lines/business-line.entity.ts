import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { Length } from 'class-validator';
import { Common } from '../shared/entities/common';
import { Company } from 'src/companies/company.entity';

@Entity()
export class Businessline extends Common {
  @Column()
  @Length(4, 20)
  name: string;

  @Column()
  @Length(1, 1000)
  description: string;

  @Column({
    name: 'mdi-icon',
  })
  mdiIcon: string;

  @ManyToMany(
    type => Company,
    company => company.businesslines,
  )
  @JoinTable({ name: 'businesslines_companies' })
  companies: Company[];
}
