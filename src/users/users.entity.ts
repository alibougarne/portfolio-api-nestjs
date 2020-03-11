import {
  Entity,
  Column,
  Unique,
} from "typeorm";
import { Length, IsNotEmpty, IsEmail } from "class-validator";
import { Common } from "../shared/entities/common";
import * as bcrypt from "bcryptjs";
import { keys } from 'src/shared/config/config';


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