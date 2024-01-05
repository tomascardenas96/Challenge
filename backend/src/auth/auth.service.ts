import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const user = await this.userService.findOneByEmail(registerDto.email);
    if (user) {
      throw new BadRequestException('User already exists');
    }

    const roundSalt = 10;
    const salt = await bcryptjs.genSalt(roundSalt);

    return await this.userService.newUser({
      ...registerDto,
      password: await bcryptjs.hash(registerDto.password, salt),
    });
  }

  async login({ email, password }: LoginDto) {
    const user: User = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Incorrect e-mail');
    }

    const isValidPassword = await bcryptjs.compare(password, user.password);
    if (!isValidPassword) {
      throw new UnauthorizedException('Incorrect password');
    }

    const payload = { email: user.email };

    const secretKey = process.env.JWT_SECRET;
    if (!secretKey) {
      throw new UnauthorizedException('Environment variable is not defined');
    }

    const token = await this.jwtService.signAsync(payload, {
      secret: secretKey,
    });

    return {
      ...user,
        token,
        message: 'success'
    }
  }
}
