import { HttpException } from "@nestjs/common";
export declare class CompanyNotFoundException extends HttpException {
    constructor(message: string, st: number);
}
