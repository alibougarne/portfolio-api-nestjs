import { Module } from '@nestjs/common';
import { BusinessLinesController } from './business-lines.controller';
import { BusinessLinesService } from './business-lines.service';

@Module({
  controllers: [BusinessLinesController],
  providers: [BusinessLinesService]
})
export class BusinessLinesModule {}
