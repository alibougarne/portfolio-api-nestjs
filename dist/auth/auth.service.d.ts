import { UsersService } from 'src/users/users.service';
import { loginUserDto } from 'src/users/dto/login.user.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/users.entity';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(loginUserDto: loginUserDto): Promise<User | null>;
    login(user: User): Promise<{
        access_token: string;
    }>;
}
