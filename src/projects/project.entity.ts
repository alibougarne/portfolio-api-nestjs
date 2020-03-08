import { Entity, Column, ManyToOne, ManyToMany, JoinTable, IsNull } from 'typeorm';
import {
  Length,
  Max,
  IsEmail,
  IsNotEmpty,
  IsUrl,
  IsDate,
  IsEmpty,
} from 'class-validator';
import { Category } from '../categories/category.entity';
import { Common } from '../shared/entities/Common';
import { Tag } from '../tags/tag.entity';
import { type } from 'os';
import { Company } from 'src/companies/company.entity';

@Entity()
export class Project extends Common {
  @Column()
  @Length(4, 20)
  name: string;

  @Column()
  @Length(4, 1500)
  description: string;

  @Column({ default: 0 })
  @Max(5)
  rating: number;

  @Column({
      default: null
  })
  @Length(1, 20)
  @IsUrl()
  @IsEmpty()
  link: string;

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
  endDate: Date;

  @ManyToOne(
    type => Category,
    category => category.projects,
  )
  category: Category;

  @ManyToOne(
    type => Company,
    company => company.projects,
  )
  company: Company;

  @ManyToMany(
    type => Tag,
    tag => tag.projects,
  )
  @JoinTable({ name: 'projects_tags' })
  tags: Tag[];
}
