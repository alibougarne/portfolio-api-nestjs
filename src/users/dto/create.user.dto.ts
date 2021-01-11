import { IsEmail, IsNotEmpty, IsEmpty, IsString, IsDateString,Validate } from 'class-validator';
import {IsUserEmailAlreadyExist} from "../validators/uniqueEmail";
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
	@IsDateString()
	readonly birth_date: Date
}
