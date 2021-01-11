import { Module } from '@nestjs/common';
import { EducationsController } from './educations.controller';
import { EducationsService } from './educations.service';
import { Education } from './education.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [TypeOrmModule.forFeature([Education]), MulterModule.register({
    dest: './client/resources/educations',
  })],
  controllers: [EducationsController],
  providers: [EducationsService]
})
export class EducationsModule {}
