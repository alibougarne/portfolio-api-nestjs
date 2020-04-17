import { Injectable } from '@nestjs/common';
import { Tag } from './tag.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TagNotFoundException } from './exceptions/TagNotFoundException.exception';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  async getAllTags(): Promise<Tag[]> {
    try {
      let tags: Tag[] = await this.tagRepository.find({
        order: {
          name: 'ASC',
        },
      });
      return tags;
    } catch (error) {
      throw new TagNotFoundException(error.toString(), 500);
    }
  }

  async saveTag(tag: Tag): Promise<Tag> {
    try {
      return await this.tagRepository.save(tag);
    } catch (error) {
      throw new TagNotFoundException('Tag not saved', 500);

    }
  }

  async deleteTag(tagId: string) {
    try {
      return await this.tagRepository.delete(tagId);
    } catch (error) {
      throw new TagNotFoundException("Can't delete tag", 500);
    }
  }
}
