import { HttpStatus, HttpException } from "@nestjs/common";

export class TagNotFoundException extends HttpException {
    constructor(message:string, st:number) {
        super({
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: message,
          }, st )
    }
  }