import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersDTO } from './users.dto';

@Controller('users')
export class UsersController {
    constructor (private readonly usersService: UsersService) {}

    @Get() 
    allUsers() {
        return this.usersService.allUsers();
    }

    @Post()
    newUser(@Body() user: usersDTO) {
        return this.usersService.newUser(user);
    }

}
