import { Tag } from './tag.entity';
import { TagsService } from './tags.service';
import { TagDto } from './dto/tagDto.dto';
export declare class TagsController {
    private readonly tagsService;
    constructor(tagsService: TagsService);
    getAllTags(): Promise<TagDto[]>;
    createTag(tag: Tag, tagImage: any): Promise<void>;
}
