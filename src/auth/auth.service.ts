
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { loginUserDto } from 'src/users/dto/login.user.dto';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  
  async validateUser(loginUserDto: loginUserDto): Promise<any> {
    // const user = await this.usersService.findOne(loginUserDto.email);
    // if (user 
    //   && await this.usersService.compareHash(loginUserDto.password, user.password)
    //   ) {
    //   return user;
    // }
    return null;
  }

  async login(user: any) {
    const payload =  await this.usersService.findOne(user.email);
    return {
      access_token: await this.jwtService.sign({data:payload}),
    };
  }
}