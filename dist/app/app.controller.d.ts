import { AppService } from './app.service';
import { AuthService } from 'src/auth/auth.service';
import { loginUserDto } from 'src/users/dto/login.user.dto';
export declare class AppController {
    private readonly appService;
    private readonly authService;
    constructor(appService: AppService, authService: AuthService);
    getHello(): string;
    login(loginUserDto: loginUserDto): Promise<{
        access_token: string;
    } | {
        message: string;
    }>;
    seeUploadedFile(image: string, res: any, req: any): any;
}
