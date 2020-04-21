import { Repository } from 'typeorm';
import { User } from './users.entity';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findOne(email: string): Promise<User>;
    getHash(password: string | undefined): Promise<string>;
    compareHash(password: string | undefined, hash: string | undefined): Promise<boolean>;
}
