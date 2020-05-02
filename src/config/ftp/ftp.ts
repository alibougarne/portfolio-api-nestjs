import * as Client from 'ftp'
require('dotenv').config()

export default class ClientFtp{
    client = new Client();
    public connect(){
        console.log(process.env);

        this.client.on('ready', () => {
            this.client.list((err, list) => {
              if (err) throw err;
              console.dir(list);
              this.client.end();
            });
          });
          // connect to localhost:21 as anonymous
          this.client.connect({
            host:process.env.SERVER_FTP,
            user: process.env.USER_FTP,
            password: process.env.PASSWORD_FTP,
        });
    }

}