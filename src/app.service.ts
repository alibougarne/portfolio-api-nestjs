import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World 💩💩!';
  }
  readonly fruits: any = {
    peach: '🍑',
    strawberry: '🍓',
    banana: '🍌'
  };
  async getFruit(name: string): Promise<string> {
    console.log('%c⧭ 💩', 'color: #0088cc', name);
    console.log('%c⧭ name: ', 'color: #e50000', name);
    let a: string = "";
    this.fruits['merzak'] = '🥐';
    console.log('%c⧭ fruits: 🍎', 'color: #00bf00', this.fruits);
    await new Promise(resolve => {
      a = this.fruits[name];
      setTimeout(resolve, 2000)
    })
    return a;
  }
  getMerzak = (name:string):string => { 
    return `i'm ${name} i like eating ! ${this.fruits['banana']}`
  }
}
