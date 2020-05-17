import Client from 'ftp';
require('dotenv').config();

export default class ClientFtp {
  client = new Client();

  public getList() {
    this.client.on('ready', () => {
      this.client.list((err, list) => {
        if (err) throw err;
        console.dir(list);
        this.client.end();
      });
    });
    // connect to localhost:21 as anonymous
    this.connect()
  }

  public async put(source:any, destinationPath:string) {
    this.client.on('ready', () => {
      this.client.put(source, destinationPath, (err) => {
        console.log('%c⧭ error ==> ', 'color: #e50000', err);
        if (err) throw err;
        this.client.end();
      });
    });
    // connect to localhost:21 as anonymous
    this.connect()
  }

  private connect(){
    this.client.connect({
        host: process.env.SERVER_FTP,
        user: process.env.USER_FTP,
        password: process.env.PASSWORD_FTP,
      });
  }
}
