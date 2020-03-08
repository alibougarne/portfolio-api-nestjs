import { Entity, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Length } from 'class-validator';
import { Common } from '../shared/entities/common';
import { Country } from 'src/countries/country.entity';

@Entity()
export class Contact extends Common {
  @Column()
  @Length(1, 50)
  name: string;

  @Column()
  @Length(1, 50)
  lastName: string;

  @Column({
    type: "date"
  })
  @Length(1, 50)
  birthday: string;


  @Column()
  @Length(1, 5)
  countryCode: string;

  @OneToOne(type => Country)
  @JoinColumn()
  country: Country;
}
