import { Entity, Column, OneToMany } from 'typeorm';
import { Length, IsUrl, IsDate } from 'class-validator';
import { Project } from '../projects/project.entity';
import { Common } from '../shared/entities/common';

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
  businessline: string;



  @Column('begin-date')
  @IsDate()
  beginDate: Date;

  @Column('end-date')
  @IsDate()
  endDate: Date;

  @Column({
    name: 'logo-path',
  })
  logoPath: string;

  @OneToMany(
    () => Project,
    project => project.company,
  )
  projects: Project[];
}
