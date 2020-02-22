import { IsEmail, IsNotEmpty, IsDate, IsEmpty, IsString, IsNumber, IsDateString,Validate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class loginUserDto {
    
	@IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: Readonly<String>;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    password: Readonly<String>;
}
