import { Tag } from './tag.entity';
import { TagsService } from './tags.service';
export declare class TagsController {
    private readonly tagsService;
    constructor(tagsService: TagsService);
    getAllTags(): Promise<Tag[]>;
    deleteTag(tagId: string): Promise<import("typeorm").DeleteResult>;
    createTag(payload: any, tagImage: any): Promise<Tag>;
    editTag(payload: any, tagImage: any): Promise<Tag>;
}
