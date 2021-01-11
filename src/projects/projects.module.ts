import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { Project } from './project.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [TypeOrmModule.forFeature([Project]), MulterModule.register({
    dest: './client/resources/projects',
  })],
  providers: [ProjectsService],
  controllers: [ProjectsController]
})
export class ProjectsModule {}
