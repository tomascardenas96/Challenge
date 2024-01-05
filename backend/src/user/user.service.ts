import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { usersDTO } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private async lastID(): Promise<number> {
    try {
      const users = await this.allUsers();
      return users.length === 0 ? 0 : users[users.length - 1].id;
    } catch (error) {
      throw new Error('Error getting last user ID');
    }
  }

  async newUser(user: usersDTO): Promise<User> {
    try {
      const { userName, email, password } = user;
      const addedUser = {
        id: (await this.lastID()) + 1,
        userName: userName,
        email: email,
        password: password,
        isLoggedIn: false,
      };

      const res = await fetch('http://localhost:3100/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(addedUser),
      });
      if (!res.ok) {
        throw new BadRequestException('Error creating new user');
      }
      return addedUser;
    } catch (error) {
      throw new BadRequestException('Error creating new user');
    }
  }

  async allUsers(): Promise<User[]> {
    try {
      const res = await fetch('http://localhost:3100/users');
      if (!res.ok) {
        throw new Error('Error fetching data from database');
      }
      return await res.json();
    } catch (error) {
      throw new Error('Error fetching data from database');
    }
  }

  async findOneByEmail(email: string): Promise<User> {
    const allUsers = await this.allUsers();
    const foundUser = allUsers.find(
      (userEmail: any) => email === userEmail.email,
    );
    return foundUser;
  }
}
