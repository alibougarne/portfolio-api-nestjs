import { Injectable } from '@nestjs/common';
import Axios, { AxiosResponse } from 'axios';
import Cloudinary from '../tools/cloudinary';
import { CustomException } from './exception/custom.exception';
require('dotenv').config();

@Injectable()
export class AppService {

  getHello(): any {
    return { res: 'Hello World!' };
  }

  getCloudinaryUploadedFile = async (
    imageName: string,
    targetFolder: string,
  ): Promise<string> => {
    try {
      let url = '';
      const cloudinary = new Cloudinary();
      if (!!targetFolder && !!imageName)
        url = await cloudinary.getImageUrl(
          `portfolio/${targetFolder}/${imageName}`,
        );
      else throw Error;
      return url;
    } catch (error) {
      throw new CustomException('resource not found', 401);
    }
  };

  async loginSirv(): Promise<AxiosResponse> {
    try {
      const payload: any = {
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
      };
      return await Axios.post('https://api.sirv.com/v2/token', payload);
    } catch (error) {
      throw new Error(error);
    }
  }
}
