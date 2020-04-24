const credentials = {
  sqlite: {
    type: 'sqlite',
    database: 'database.sqlite',
  },
  postgres: {
    database: 'd9fdc6fjd76tl3',
    // url: "postgres://ttrnwlmeqzgcaz:0d8979d0f6bc6504cf51cbacfebaaa9f2c5f7b12d26157f48539900589ff35d7@ec2-3-91-139-25.compute-1.amazonaws.com:5432/d9fdc6fjd76tl3",
    type: "postgres",
    host: 'ec2-3-91-139-25.compute-1.amazonaws.com',
    port: 5432,
    username: 'ttrnwlmeqzgcaz',
    password: '0d8979d0f6bc6504cf51cbacfebaaa9f2c5f7b12d26157f48539900589ff35d7',
    // We need add the extra SSL to use heroku on localhost
    extra: {
        ssl: true,
    },
  },
};
export default credentials;
// const postgres = {
//   dbname: 'd9fdc6fjd76tl3',
//   host: 'ec2-3-91-139-25.compute-1.amazonaws.com',
//   port: 5432,
//   username: 'ttrnwlmeqzgcaz',
//   password: '0d8979d0f6bc6504cf51cbacfebaaa9f2c5f7b12d26157f48539900589ff35d7',
//   sslmode: 'require',
// };
