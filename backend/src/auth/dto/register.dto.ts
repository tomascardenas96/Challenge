import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  userName: string;

  @Transform(({ value }) => value.toLowerCase())
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  password: string;
}
