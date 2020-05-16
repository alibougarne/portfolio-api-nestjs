import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from 'src/auth/auth.service';
import { loginUserDto } from 'src/users/dto/login.user.dto';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('login')
  async login(@Body() loginUserDto: loginUserDto) {
    let pass = await this.authService.validateUser(loginUserDto);
    if (pass) {
      return this.authService.login(pass);
    }
    return { message: 'Wrong email or password' };
  }
  // @Get('images/:imgPath')
  // seeUploadedFile(
  //   @Param('imgPath') image: string,
  //   @Res() res: any,
  //   @Req() req: any,
  // ) {
  //   return res.sendFile(image, {
  //     root: `./client/resources/${req.query.target ? req.query.target : ''}`,
  //   });
  // }

  @Get('images/:imgPath')
  async getCloudinaryUploadedFile(
    @Param('imgPath') image: string,
    @Req() req: any,
  ): Promise<string>{
    console.log('%c⧭', 'color: #408059', image);
    return await this.appService.getCloudinaryUploadedFile(
      image,
      req.query.target ? req.query.target : '',
    );
  }
}
