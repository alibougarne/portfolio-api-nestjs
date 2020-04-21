import { Module } from '@nestjs/common';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';
import { Job } from './job.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [TypeOrmModule.forFeature([Job]), MulterModule.register({
    dest: './client/resources/jobs',
  })],
  controllers: [JobsController],
  providers: [JobsService]
})
export class JobsModule {}
