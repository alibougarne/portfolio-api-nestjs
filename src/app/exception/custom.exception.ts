import { HttpException } from "@nestjs/common";

export class NotFoundException extends HttpException {
    constructor(message:string, HttpStatus:number) {
        super({
            status: HttpStatus,
            error: message,
          }, HttpStatus )
    }
  }