import { Module } from '@nestjs/common';
import { EducationsController } from './educations.controller';
import { EducationsService } from './educations.service';

@Module({
  controllers: [EducationsController],
  providers: [EducationsService]
})
export class EducationsModule {}
