import { Tag } from "../tag.entity";
import { extname } from "path";

export const imageFileFilter = (req, file, callback) => {
  console.log('%c⧭ file ===> ', 'color: #cc0036', file);
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(new Error('Only image files are allowed!'), false);
  }
  callback(null, true);
};
export const editFileName = (req, file, callback) => {
  console.log('%c⧭ file ===> ', 'color: #cc0036', file);
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = Array(10)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
  callback(null, `${randomName}${fileExtName}`);
};
