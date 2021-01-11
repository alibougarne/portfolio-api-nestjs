import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { Length,IsEmpty } from 'class-validator';
import { Common } from '../../shared/entities/common';
import { Company } from '../../admin-features/companies/company.entity';

@Entity("businesslines")
export class Businessline extends Common {
  @Column()
  @Length(4, 20)
  name: string;

  @Column({
    default: 'Lorum Ipsum sit amet Lorum Ipsum sit amet Lorum Ipsum sit amet'
  })
  @IsEmpty()
  @Length(0, 1000)
  description: string;

  @Column({
    name: 'mdi-icon',
  })
  mdiIcon: string;

  @ManyToMany(
    type => Company,
    company => company.businesslines,
  )
  // @JoinTable({ name: 'companies_businesslines' })
  companies: Company[]


}