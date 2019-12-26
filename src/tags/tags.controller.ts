import { Controller, Get } from '@nestjs/common';
import { Tag } from './tag.entity';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
    constructor(private readonly tagsService: TagsService) { }

    @Get('all')
    async getAllTags(): Promise<Tag[]> {
        let tags: Tag[] = await this.tagsService.getAllTags();
        return tags;
    }

    @Get()
    getHello(): string {
      return "adadad";
    }
}
