import { Module } from '@nestjs/common';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { Country } from './country.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [TypeOrmModule.forFeature([Country]), MulterModule.register({
    dest: './client/resources/countries',
  })],
  controllers: [CountriesController],
  providers: [CountriesService]
})
export class CountriesModule {}
