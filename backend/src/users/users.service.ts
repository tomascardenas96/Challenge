import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { usersDTO } from './users.dto';
import { ValidationPipe } from '@nestjs/common';

@Injectable()
export class UsersService {
  async allUsers(): Promise<any> {
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

  async user(id: number): Promise<any> {
    try {
      const res = await fetch(`http://localhost:3100/users/${id}`);
      if (!res.ok) {
        throw new Error('Error fetching data by ID from database');
      }
      return await res.json();
    } catch (error) {
      throw new NotFoundException('Error fetching data by ID from database');
    }
  }

  private async lastID(): Promise<number> {
    try {
      const users = await this.allUsers();
      return await users[users.length - 1].id;
    } catch (error) {
      throw new Error('Error getting last user ID');
    }
  }

  async newUser(user: usersDTO): Promise<any> {
    try {
      const { userName, email, password, isLoggedIn } = user;
      const addedUser = {
        id: (await this.lastID()) + 1,
        userName: userName,
        email: email,
        password: password,
        isLoggedIn: isLoggedIn,
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

  async updateUser(id: number, user: usersDTO) {
    try {
      const { userName, email, password, isLoggedIn } = user;
      const updatedUser = {
        id: id,
        userName: userName,
        email: email,
        password: password,
        isLoggedIn: isLoggedIn,
      };
      const res = await fetch(`http://localhost:3100/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedUser),
      });
      if (!res.ok) {
        throw new BadRequestException('Error updating user');
      }
      return updatedUser;
    } catch (error) {
      throw new BadRequestException('Error updating user');
    }
  }
}
