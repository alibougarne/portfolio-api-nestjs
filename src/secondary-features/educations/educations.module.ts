import { Module } from '@nestjs/common';
import { EducationController } from './educations.controller';
import { EducationService } from './educations.service';

@Module({
  controllers: [EducationsController],
  providers: [EducationsService]
})
export class EducationsModule {}
