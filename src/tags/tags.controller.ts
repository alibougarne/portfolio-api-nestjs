import { Controller, Get } from '@nestjs/common';
import { Tag } from './tag.entity';
import { TagsService } from './tags.service';
import { TagDto } from './dto/tagDto.dto';

@Controller('tags')
export class TagsController {
    constructor(private readonly tagsService: TagsService) { }

    @Get('all')
    async getAllTags(): Promise<TagDto[]> {
        let tags: Tag[] = await this.tagsService.getAllTags();
        let tagDtos:TagDto[] = this.tagsService.convertTagsToTagDtoS(tags);
        return tagDtos;
    }

    @Get()
    getHello(): string {
      return "adadad";
    }
}
