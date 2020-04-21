import { Tag } from './tag.entity';
import { Repository } from 'typeorm';
export declare class TagsService {
    private readonly tagRepository;
    constructor(tagRepository: Repository<Tag>);
    getAllTags(): Promise<Tag[]>;
    saveTag(tag: Tag): Promise<Tag>;
    deleteTag(tagId: string): Promise<import("typeorm").DeleteResult>;
}
