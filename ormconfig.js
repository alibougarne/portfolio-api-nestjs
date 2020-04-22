console.log(__dirname);
const env = require('dotenv');
env.config();

const isProd = process.env.NODE_ENV === 'production';
const entitiesExtension = isProd ? 'js' : 'ts';
const entitiesDir = isProd ? 'dist' : 'src';
const migrationsDir = `${entitiesDir}/**/shared/migration/*.${entitiesExtension}`

module.exports = {
  type: 'sqlite',
  database: 'database.sqlite',
  synchronize: false,
  logging: true,
  entities: [
    `${__dirname}/${entitiesDir}/**/*.entity.${entitiesExtension}`,
    `${__dirname}/${entitiesDir}/**/shared/entities/**.entity.${entitiesExtension}`,
  ],
  migrations: [migrationsDir],
  cli: {
    migrationsDir: 'src/migration',
    entitiesDir: 'src/shared/entity',
    migrationsDir: 'src/shared/migration',
    subscribersDir: 'src/subscriber',
  },
};
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
