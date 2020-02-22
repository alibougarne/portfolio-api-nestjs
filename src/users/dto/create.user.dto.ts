import { IsEmail, IsNotEmpty, IsDate, IsEmpty, IsString, IsNumber, IsDateString,Validate } from 'class-validator';
import {IsUserEmailAlreadyExist} from "../validators/uniqueEmail";
import {IsUserPhoneAlreadyExist} from "../validators/uniquePhone";
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
	
	readonly _id?: String

	@ApiProperty()
	@IsEmail()
	@IsNotEmpty()
	@Validate(IsUserEmailAlreadyExist)
	readonly email: String;

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	readonly first_name : string;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	readonly last_name: String;

	@ApiProperty()
	@IsEmpty()
	password: String;

	@ApiProperty()
	@IsNumber()
	@Validate(IsUserPhoneAlreadyExist)
	readonly phone: Number;

	@ApiProperty()
	@IsDateString()
	readonly birth_date: Date
}
