import { createConnection } from 'typeorm';

console.log(__dirname);
const env = require('dotenv');
env.config();
const credentials = {
  sqlite: {
    type: 'sqlite',
    database: 'database.sqlite',
  },
  postgres: {
    type: "postgres",
    url: "postgres://ttrnwlmeqzgcaz:0d8979d0f6bc6504cf51cbacfebaaa9f2c5f7b12d26157f48539900589ff35d7@ec2-3-91-139-25.compute-1.amazonaws.com:5432/d9fdc6fjd76tl3",
    database: 'd9fdc6fjd76tl3',
    host: 'ec2-3-91-139-25.compute-1.amazonaws.com',
    port: 5432,
    username: 'ttrnwlmeqzgcaz',
    password: '0d8979d0f6bc6504cf51cbacfebaaa9f2c5f7b12d26157f48539900589ff35d7',
    // PGSSLMODE=require,
    // We need add the extra SSL to use heroku on localhost
    extra: {
        ssl: true,
    },
  },
};
const isProd = process.env.NODE_ENV === 'production';
const entitiesExtension = isProd ? 'js' : 'ts';
const entitiesDir = isProd ? 'dist' : 'src';
const migrationsDir = `${entitiesDir}/**/shared/migration/*.${entitiesExtension}`
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
        type: "postgres",
        url: "postgres://ttrnwlmeqzgcaz:0d8979d0f6bc6504cf51cbacfebaaa9f2c5f7b12d26157f48539900589ff35d7@ec2-3-91-139-25.compute-1.amazonaws.com:5432/d9fdc6fjd76tl3",
        ssl: true,
        // database: 'd9fdc6fjd76tl3',
        // host: 'ec2-3-91-139-25.compute-1.amazonaws.com',
        // port: 5432,
        // username: 'ttrnwlmeqzgcaz',
        // password: '0d8979d0f6bc6504cf51cbacfebaaa9f2c5f7b12d26157f48539900589ff35d7',
        // We need add the extra SSL to use heroku on localhost
        // extra: {
        //     ssl: true,
        // },
        synchronize: true,
        logging: true,
        entities: [
          `${__dirname}/${entitiesDir}/**/*.entity.${entitiesExtension}`,
          `${__dirname}/${entitiesDir}/**/shared/entities/**.entity.${entitiesExtension}`,
        ],
        migrations: [migrationsDir],
        cli: {
          entitiesDir: 'src/shared/entity',
          migrationsDir: 'src/shared/migration',
          subscribersDir: 'src/subscriber',
        },
    }),
  },
];