import {
    Entity,
    Column,
    Unique,
  } from "typeorm";
  import { Length, IsNotEmpty } from "class-validator";
  import { Common } from "src/shared/entities/common";
  import * as bcrypt from "bcryptjs";

  
  @Entity()
  @Unique(["username"])
  export class User extends Common{
  
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