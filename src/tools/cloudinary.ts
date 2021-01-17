import { CustomException } from "src/app/exception/custom.exception";

export default class Cloudinary {
  cloudinary = require('cloudinary');
  constructor() {
    this.cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });
  }

  getImageUrl = async (imagePath: string): Promise<string> => {
    let a = await this.cloudinary.url(imagePath);
    return a;
  };

  save = async (image: any, pathToSave: string, callback: Function) => {
    console.log('%c⧭ save image cloud ==+> ', 'color: #33cc99', image);
    this.cloudinary.v2.uploader.upload(
      `./${image.path}`,
      {
        use_filename: true,
        unique_filename: false,
        public_id: `${pathToSave}/${image.filename.split('.')[0]}`,
      },
      (error: any, result: any) => {
        callback(error, result);
      },
    );
  };

   deleteImage = async (imagePath: string, callback: Function) => {
    this.cloudinary.v2.uploader.destroy(imagePath, (error: any, result: any) => {
      callback(error, result);
    });
  };

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
}
