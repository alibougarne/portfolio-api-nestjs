import { Injectable } from '@nestjs/common';
import { Tag } from './tag.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TagNotFoundException } from './exceptions/TagNotFoundException.exception';
// import ClientFtp from '../config/ftp/ftp';
import Axios from 'axios';
import FormData from 'form-data';
import Cloudinary from '../tools/cloudinary';
// import { AppService } from '../app/app.service';
import { TagDto } from './dto/tagDto.dto';

const env = require('dotenv');
env.config();
@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}
  // private readonly clientFtp: ClientFtp = new ClientFtp();
  private path: any = require('path');
  private fs = require('fs');
  async getAllTags(): Promise<TagDto[]> {
    const cloudinary = new Cloudinary();
    try {
      let tags: Tag[] = await this.tagRepository
        .createQueryBuilder('tag')
        .loadRelationCountAndMap('tag.projects', 'tag.projects')
        .getMany();
      let tagDtos: TagDto[] = [];
      for (let tag of tags) {
        tagDtos.push({
          ...tag,
          cloudImageUrl: await cloudinary.getCloudinaryUploadedFile(
            tag.logoPath,
            'tags',
          ),
        });
      }
      return tagDtos;
    } catch (error) {
      throw new TagNotFoundException(error.toString(), 500);
    }
  }

  async saveTag(tag: Tag, image: any): Promise<Tag> {
    try {
      if (image){
        const cloudinary = new Cloudinary();
        if (tag.id && tag.logoPath) {
          cloudinary.deleteImage(
            [...`portfolio/tags/${tag.logoPath}`],
            async (error: Error, result: any) => {
              if (error) {
                console.error('%c⧭', 'color: #731d6d', error);
                throw error;
              }
            },
          );
        }
        cloudinary.save(
          image,
          'portfolio/tags',
          async (error: Error, result: any) => {
            if (error) {
              console.error('%c⧭', 'color: #731d6d', error);
              throw error;
            }
          },
        );
        tag.logoPath = image.filename;
      }
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

  saveToCloudinary = async (image: any) => {};

  saveToSirv = async (image: any) => {
    console.log('%c⧭', 'color: #d90000', image);
    let fs = require('fs');
    // let fr = new FileReader()
    let ba = await fs.readFileSync(`./client/resources/tags/${image.filename}`);
    console.log('%c⧭ buffer ==> ', 'color: #807160', ba);
    let token = '';
    await Axios.post(
      'https://api.sirv.com/v2/token',
      {
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then(response => {
        console.log('%c⧭', 'color: #00b300', response.data.token);
        if (response.data && response.data.token) token = response.data.token;
      })
      .catch(err => console.error(err));
    if (!!token) {
      let form = new FormData();
      // form.append("images",  ba, { knownLength: fs.statSync(`./client/resources/tags/${image.filename}`).size });
      form.append('images', ba, image.filename);
      // form.append('images', image);
      await Axios.post(`https://api.sirv.com/v2/files/upload`, form, {
        params: {
          filename: 'merzaq',
        },
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': `multipart/form-data; boundary=${
            (form as any)._boundary
          }`,
        },
      })
        .then(response => {
          console.log('%c⧭ response upload', 'color: #00b300', response);
        })
        .catch(err => console.error(err));
      // let fs      = require('fs');
      // let request = require('request');
      // let opts = {
      //   url: 'https://api.sirv.com/v2/files/upload',
      //   method: 'POST',
      //   Authorization: `Bearer ${token}`,
      //   json: true,
      //   formData: {
      //     front: fs.createReadStream(image),
      //   }
      // };

      // request(opts, function(err, resp, body) {
      //   console.log(err, body);
      // });
    }
  };


}
