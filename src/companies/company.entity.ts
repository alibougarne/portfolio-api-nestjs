import {
  Entity,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Length, IsUrl, IsDate } from 'class-validator';
import { Project } from '../projects/project.entity';
import { Common } from '../shared/entities/common';
import { Businessline } from 'src/business-lines/business-line.entity';
import { Country } from 'src/countries/country.entity';

@Entity()
export class Company extends Common {
  @Column()
  @Length(4, 20)
  name: string;

  @Column()
  @Length(1, 20)
  @IsUrl()
  link: string;

  @Column()
  @Length(2, 50)
  type: string; // i mean here if it's a multinational, national... company

  @Column()
  @Length(0, 500)
  description: string; // i mean here if it's a multinational, national... company

  @Column({
    type: Date,
    name: 'begin-date',
  })
  @IsDate()
  beginDate: Date;

  @Column({
    type: Date,
    name: 'end-date',
  })
  @IsDate()
  endDate: Date;

  @Column({
    name: 'logo-path',
  })
  logoPath: string;

  @ManyToMany(
    type => Businessline,
    businessline => businessline.companies,
  )
  @JoinTable({ name: 'businesslines_companies' })
  businesslines: Businessline[];

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
}
