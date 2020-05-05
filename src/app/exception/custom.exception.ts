import { HttpException } from "@nestjs/common";

export class CustomException extends HttpException {
    constructor(message:string, HttpStatus:number) {
        super({
            status: HttpStatus,
            error: message,
          }, HttpStatus )
    }
  }