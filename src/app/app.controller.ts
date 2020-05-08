import { Controller, Get, Post, Body, Param, Res, Req, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from 'src/auth/auth.service';
import { loginUserDto } from 'src/users/dto/login.user.dto';
import { AxiosResponse } from 'axios';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from 'src/tags/utils/file-upload.utils';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Post("login")
  async login(@Body() loginUserDto: loginUserDto) {
    let pass = await this.authService.validateUser(loginUserDto);
    if (pass) {
      return this.authService.login(pass);
    }
    return { message: "Wrong email or password" };
  }

  @Get('images/:imgPath')
  seeUploadedFile(@Param('imgPath') image:string, @Res() res:any, @Req() req: any) {
    return res.sendFile(image, { root: `./client/resources/${req.query.target?req.query.target:""}` });
  }

}
