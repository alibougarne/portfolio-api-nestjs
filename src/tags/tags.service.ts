import { Injectable } from '@nestjs/common';
import { Tag } from './tag.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TagsService {
    constructor(
        @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>
    ) { }

    async getAllTags(): Promise<Tag[]> {
        let tags: Tag[] = await this.tagRepository.find({
            order: {
                name: "ASC"
            }
        });
        return tags;
    }
    //  getAllTags(): Promise<Tag[]> {
    //     let tags: Tag[] = await this.tagRepository.find({
    //         order: {
    //             name: "ASC"
    //         }
    //     });
    //     return tags;
    // }

}
