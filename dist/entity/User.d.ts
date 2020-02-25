import { Commmun } from "./Commun";
export declare class User extends Commmun {
    username: string;
    password: string;
    role: string;
    hashPassword(): void;
    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string): boolean;
}
