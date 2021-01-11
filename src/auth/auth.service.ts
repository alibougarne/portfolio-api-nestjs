<<<<<<< HEAD
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {}
=======

import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { loginUserDto } from 'src/users/dto/login.user.dto';

import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/users.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}
  
  async validateUser(loginUserDto: loginUserDto): Promise<User | null> {
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
>>>>>>> 8841f6c2c2ed71c4845e08e6c79690292d33eb31
