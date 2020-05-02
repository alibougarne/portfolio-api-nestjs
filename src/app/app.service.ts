import { Injectable } from '@nestjs/common';
import Axios, { AxiosResponse } from 'axios';
require('dotenv').config();

@Injectable()
export class AppService {
  getHello(): any {
    return { res: 'Hello World!' };
  }

  loginSirv(): Promise<AxiosResponse> {
    try {
      const payload: any = {
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
      };
      return Axios.post('https://api.sirv.com/v2/token', payload);
    } catch (error) {
      throw new Error(error);
    }
  }
}
