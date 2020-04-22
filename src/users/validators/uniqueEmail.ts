import {registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments} from "class-validator";
import {UsersService} from '../users.service'
import { Inject,Injectable } from '@nestjs/common';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsUserEmailAlreadyExist {
  constructor(
    @Inject('UserService') private readonly userService: UsersService,
  ) {
  }

  async validate(text: string) {
    const user = await this.userService.findOne(text);
    return !user;
  }

  defaultMessage(args: ValidationArguments) {
    return 'User with this email already exists.';
  }
}