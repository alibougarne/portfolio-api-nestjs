import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import * as bcrypt from "bcryptjs";
import { keys } from '../shared/config/config';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) { }

  async findOne(email: string): Promise<User> {
    let user = await this.userRepository.createQueryBuilder("user")
    .where("user.email = :email", { email: email })
    .getOne();
    // await this.userRepository.find(
    //   { where: { email: email } }
    // )[0];
    return user;
  }

  async getHash(password: string | undefined): Promise<string> {
    return await bcrypt.hash(password, keys.SALT);
  }

  async compareHash(
    password: string | undefined,
    hash: string | undefined
  ): Promise<boolean> {
    console.log('%c⧭', 'color: #f2ceb6', bcrypt.compare(password, hash));
    return await bcrypt.compare(password, hash);
  }

}
