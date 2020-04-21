import { ValidationArguments } from "class-validator";
import { UsersService } from '../users.service';
export declare class IsUserEmailAlreadyExist {
    private readonly userService;
    constructor(userService: UsersService);
    validate(text: string): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
