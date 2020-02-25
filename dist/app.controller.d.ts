import { AppService } from './app.service';
import { Request } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(name: string): Promise<string>;
    getResponse(params: any): string;
    findAll(request: Request): string;
}
