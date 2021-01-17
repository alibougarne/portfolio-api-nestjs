import { CustomException } from 'src/app/exception/custom.exception';

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

  deleteImage = async (imagesPaths: string[], callback: Function) => {
    this.cloudinary.v2.api.delete_resources(
      imagesPaths,
      (error: any, result: any) => {
        console.log('%c⧭ result delete resource ', 'color: #997326', result);
        callback(error, result);
      },
    );
    // this.cloudinary.v2.api.resource(imagePath.split(".")[0], (err, res) => {
    //   console.log('%c⧭ err get asset', 'color: #e57373', err);
    //   console.log('%c⧭ res get asset', 'color: #e57373', res.asset_id);
    //   if(!err){
    //     this.cloudinary.v2.uploader.destroy(res.asset_id, (error: any, result: any) => {
    //       console.log('%c⧭ result delete resource ', 'color: #997326', result);
    //       callback(error, result);
    //     });
    //   }
    // });
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
