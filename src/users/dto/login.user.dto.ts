import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
    
	@IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: Readonly<string>;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    password: Readonly<string>;
}
