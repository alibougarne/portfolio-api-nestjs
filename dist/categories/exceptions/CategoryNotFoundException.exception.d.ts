import { HttpException } from "@nestjs/common";
export declare class CategoryNotFoundException extends HttpException {
    constructor(message: string, st: number);
}
