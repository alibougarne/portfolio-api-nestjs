import { Common } from "../shared/entities/common";
export declare class User extends Common {
    username: string;
    email: string;
    password: string;
    role: string;
    hashPassword(): void;
    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string): boolean;
}
