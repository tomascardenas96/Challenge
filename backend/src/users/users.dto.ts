import { IsString, IsEmail, IsNotEmpty, IsBoolean, IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class usersDTO {
  @IsNumber()
  @IsOptional()
  id?:number

  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsEmail()
  @IsNotEmpty()
  @Transform(({value}) => value.toLowerCase())
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsBoolean()
  isLoggedIn: boolean;
}
