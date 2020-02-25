import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
import * as bcrypt from "bcryptjs";
import { Commmun } from "./Commun";

@Entity()
@Unique(["username"])
export class User extends Commmun{

  @Column()
  @Length(4, 20)
  username: string;

  @Column({select: false})
  @Length(4, 100)
  password: string;

  @Column()
  @IsNotEmpty()
  role: string;

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}