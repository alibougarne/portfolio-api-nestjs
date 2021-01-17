import { Injectable } from '@nestjs/common';
import { Country } from './country.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CountriesService {
    constructor(
        @InjectRepository(Country)
        private readonly countryRepository:Repository<Country>
    ){}
}
