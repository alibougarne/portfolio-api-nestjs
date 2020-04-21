import { Module } from '@nestjs/common';
import { BusinessLinesController } from './business-lines.controller';
import { BusinessLinesService } from './business-lines.service';
import { Businessline } from './business-line.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [TypeOrmModule.forFeature([Businessline]), MulterModule.register({
    dest: './client/resources/businesses',
  })],
  controllers: [BusinessLinesController],
  providers: [BusinessLinesService]
})
export class BusinessLinesModule {}
