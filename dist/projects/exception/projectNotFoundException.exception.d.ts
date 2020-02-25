import { HttpException } from "@nestjs/common";
export declare class ProjectNotFoundException extends HttpException {
    constructor(message: string, st: number);
}
