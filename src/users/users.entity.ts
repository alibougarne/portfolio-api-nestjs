import {
  Entity,
  Column,
  Unique,
} from "typeorm";
import { Length, IsNotEmpty, IsEmail } from "class-validator";
import { Common } from "../shared/entities/common";
import * as bcrypt from "bcryptjs";
import { keys } from '../shared/config/config';
import { Exclude } from 'class-transformer';


@Entity("users")
@Unique(["username"])
@Unique(["email"])
export class User extends Common {

  @Column()
  @Length(4, 20)
  username: string;

  @Column()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  
  @Column(
    // { select: false }
  )
  @Length(4, 100)
  @Exclude()
  password: string;

  @Column()
  @IsNotEmpty()
  role: string;

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, keys.SALT);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}