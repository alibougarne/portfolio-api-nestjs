import { Injectable } from '@nestjs/common';
import { Tag } from './tag.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TagNotFoundException } from './exceptions/TagNotFoundException.exception';
import ClientFtp from 'src/config/ftp/ftp';
import Axios from 'axios';
import FormData from 'form-data';

const env = require('dotenv');
env.config();
@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}
  private readonly clientFtp: ClientFtp = new ClientFtp();
  private path: any = require('path');
  private fs = require('fs');
  async getAllTags(): Promise<Tag[]> {
    try {
      let tags: Tag[] = await this.tagRepository
        .createQueryBuilder('tag')
        .loadRelationCountAndMap('tag.projects', 'tag.projects')
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

  saveToCloudinary = async (image: any) => {
    console.log('%c⧭', 'color: #007300', image);
    let fs = require('fs');
    // let fr = new FileReader()
    let ba = await fs.readFileSync(`./client/resources/tags/${image.filename}`);
    const cloudinary = require('cloudinary');
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });
    cloudinary.v2.uploader.upload(
      `./client/resources/tags/${image.filename}`,
      { use_filename: true, unique_filename: false, public_id: `portfolio/tags/${image.filename.split('.')[0]}`},
      function(error, result) {
        console.log(result, error);
      },
    );
  };

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
