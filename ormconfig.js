console.log(__dirname);
const env = require('dotenv');
env.config();

const isProd = process.env.NODE_ENV === 'production';
// const entitiesExtension = isProd ? 'js' : 'ts';
const entitiesExtension = isProd ? 'js' : 'js';
// const entitiesDir = isProd ? 'dist' : 'src';
const entitiesDir = isProd ? 'dist' : 'dist';
const migrationsDir = `${entitiesDir}/**/shared/migration/*.${entitiesExtension}`;
// const database = isProd ? 'postgres' :'sqlite';
const database = isProd ? 'postgres' : 'postgres';
// require('https').globalAgent.options.ca = require('ssl-root-cas/latest').create();
let connectionOptions = {
  type: 'postgres',
  // url: "postgres://ttrnwlmeqzgcaz:0d8979d0f6bc6504cf51cbacfebaaa9f2c5f7b12d26157f48539900589ff35d7@ec2-3-91-139-25.compute-1.amazonaws.com:5432/d9fdc6fjd76tl3",
  // dropSchema: isProd,
  synchronize: true,
  // autoLoadEntities: true,
  logging: !isProd,
  entities: [
    `${__dirname}/${entitiesDir}/**/*.entity.${entitiesExtension}`,
    `${__dirname}/${entitiesDir}/**/shared/entities/**.entity.${entitiesExtension}`,
  ],
  migrations: [migrationsDir],
  cli: {
    entitiesDir: './src/shared/entity',
    migrationsDir: './src/shared/migration',
    subscribersDir: './src/subscriber',
  },
};
if (process.env.DATABASE_URL) {
  Object.assign(connectionOptions, { url: process.env.DATABASE_URL });
  if (isProd) {
    Object.assign(connectionOptions, {
      ssl: {
        require: true,
        // Ref.: https://github.com/brianc/node-postgres/issues/2009
        // DO NOT DO THIS
        // set up your ca correctly to trust the connection
        rejectUnauthorized: false,
      },
    });
  }
}
module.exports = connectionOptions;
// {
//    "type": "sqlite",
//    "database": "database.sqlite",
//    "synchronize": false,
//    "logging": true,
//    "entities": [
//       "dist/**/**.entity{.ts,.js}",
//       "dist/**/shared/entities/**.entity{.ts,.js}"
//    ],
//    "migrations": [
//       "dist/**/shared/migration/*{.ts,.js}"
//    ],
//    "subscribers": [
//       "src/subscriber/**/*.ts"
//    ],
//    "cli": {
//       "entitiesDir": "src/shared/entity",
//       "migrationsDir": "src/shared/migration",
//       "subscribersDir": "src/subscriber"
//    }
// }
