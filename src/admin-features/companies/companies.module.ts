import { Module } from '@nestjs/common';
import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './company.entity';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [TypeOrmModule.forFeature([Company]), MulterModule.register({
    dest: './client/resources/companies',
  })],
  controllers: [CompaniesController],
  providers: [CompaniesService]
})
export class CompaniesModule {}
