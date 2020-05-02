import { Injectable } from '@nestjs/common';
import { Tag } from './tag.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TagNotFoundException } from './exceptions/TagNotFoundException.exception';
import ClientFtp from 'src/config/ftp/ftp';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}
  private readonly clientFtp:ClientFtp= new ClientFtp;
  private path:any = require("path");
  private fs = require('fs');
  async getAllTags(): Promise<Tag[]> {
    try {
      let tags: Tag[] = await this.tagRepository
      .createQueryBuilder('tag')
      .loadRelationCountAndMap('tag.projects','tag.projects')
      .getMany();
      // console.log('%c⧭ tags ===>  ', 'color: #00a3cc', tags);

      // .find({
      //   order: {
      //     name: 'ASC',
      //   },
      // });
      return tags;
    } catch (error) {
      throw new TagNotFoundException(error.toString(), 500);
    }
  }

  async saveTag(tag: Tag): Promise<Tag> {
    try {
      // const projectRootPath = this.path.resolve(__dirname);
      // const path1 = this.path.resolve("client", "..", `client/resources/tags/${tag.logoPath}`);
      // const readStream = this.fs.createReadStream(`./client/resources/tags/${tag.logoPath}`);
      // const readFile = this.fs.readFileSync(`./client/resources/tags/${tag.logoPath}`);
      // this.clientFtp.put(readFile,'images/portfolio/tags');
      // this.clientFtp.getList();
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
