import { Controller, Get, Post, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Tag } from './tag.entity';
import { TagsService } from './tags.service';
import { TagDto } from './dto/tagDto.dto';

@Controller('tags')
export class TagsController {
    constructor(private readonly tagsService: TagsService) { }

    @Get('all')
    async getAllTags(): Promise<TagDto[]> {
        let tags: Tag[] = await this.tagsService.getAllTags();
        let tagDtos: TagDto[] = this.tagsService.convertTagsToTagDtoS(tags);
        return tagDtos;
    }

    @Post('create')
    @UseInterceptors(FileInterceptor('tagImage'))
    async createTag(@Body() tag:Tag, @UploadedFile() tagImage) {
        console.log(tagImage);
    }
}
