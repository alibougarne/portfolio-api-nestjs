import {
  Entity,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Length, IsUrl } from 'class-validator';
import { Project } from '../../projects/project.entity';
import { Common } from '../../shared/entities/common';
import { Businessline } from '../../admin-features/business-lines/business-line.entity';
import { Country } from '../../admin-features/countries/country.entity';

@Entity("companies")
export class Company extends Common {
  @Column()
  name: string;

  @Column()
  @IsUrl()
  link: string;

  @Column()
  @Length(2, 50)
  type: string; // i mean here if it's a multinational, national... company

  @Column()
  description: string; // i mean here if it's a multinational, national... company

  @Column({
    type: "date",
    name: 'begin-date',
  })
  beginDate: Date;

  @Column({
    type: "date",
    name: 'end-date',
    default:null
  })
  endDate: Date;

  @Column({
    name: 'logo-path',
  })
  logoPath: string;

  @ManyToOne(
    type => Country,
    country => country.companies,
  )
  country: Country;

  @OneToMany(
    () => Project,
    project => project.company,
  )
  projects: Project[];

  @ManyToMany(
    type => Businessline,
    businessline => businessline.companies,
  )
  @JoinTable({ name: 'companies_businesslines' })
  businesslines: Businessline[];

}
