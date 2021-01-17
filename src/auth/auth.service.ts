
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginUserDto } from '../users/dto/login.user.dto';

import { JwtService } from '@nestjs/jwt';
import { User } from '../users/users.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}
  
  async validateUser(loginUserDto: LoginUserDto): Promise<User | null> {
    const user = await this.usersService.findOne(loginUserDto.email);
    console.log('%c⧭ user merzaq ====>', 'color: #00e600', user);
    if (user 
      && await this.usersService.compareHash(loginUserDto.password, user.password)
      ) {
      return user;
    }
    return null;
  }

  async login(user: User) {
    delete user.password
    return {
      access_token: this.jwtService.sign({ data: user }),
    };
  }
}