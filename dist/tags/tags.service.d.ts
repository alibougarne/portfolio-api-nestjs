import { Tag } from './tag.entity';
import { Repository } from 'typeorm';
import { TagDto } from './dto/tagDto.dto';
export declare class TagsService {
    private readonly tagRepository;
    constructor(tagRepository: Repository<Tag>);
    getAllTags(): Promise<Tag[]>;
    convertTagsToTagDtoS(tags: Tag[]): TagDto[];
}
