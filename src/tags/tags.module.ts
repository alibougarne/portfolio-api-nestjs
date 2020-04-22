import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './tag.entity';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [TypeOrmModule.forFeature([Tag]),MulterModule.register({
    dest: './client/resources/tags',
  })],
  controllers: [TagsController],
  providers: [TagsService]
})
export class TagsModule {
}
