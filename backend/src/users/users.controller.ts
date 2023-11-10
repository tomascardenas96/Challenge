import { Controller, Get, Post, Body, Put, Param, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersDTO } from './users.dto';

@Controller('users')
export class UsersController {
    constructor (private readonly usersService: UsersService) {}

    @Get() 
    allUsers() {
        return this.usersService.allUsers();
    }

    @Get(':id') 
    user(@Param('id') id:number) {
        return this.usersService.user(id);
    }

    @Post()
    @UsePipes(new ValidationPipe())
    newUser(@Body() user: usersDTO) {
        return this.usersService.newUser(user);
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: usersDTO) {
        return this.usersService.updateUser(id, user);
    }

}
