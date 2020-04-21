import { HttpException } from "@nestjs/common";
export declare class TagNotFoundException extends HttpException {
    constructor(message: string, st: number);
}
