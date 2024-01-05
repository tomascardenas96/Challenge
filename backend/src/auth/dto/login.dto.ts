import { IsString, IsEmail, IsNotEmpty, IsBoolean, IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  @Transform(({value}) => value.toLowerCase())
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}