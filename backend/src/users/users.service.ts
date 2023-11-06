import { Injectable, NotFoundException } from '@nestjs/common';
import { usersDTO } from './users.dto';

@Injectable()
export class UsersService {
  async allUsers(): Promise<any> {
    const res = await fetch('http://localhost:3100/users');
    return await res.json();
  }

  private async lastID(): Promise<number> {
    const users = await this.allUsers();
    return await users[users.length - 1].id;
  }

  async newUser(user: usersDTO): Promise<any> {
    const { userName, email, password } = user;
    const addedUser = {
      id: (await this.lastID()) + 1,
      userName: userName,
      email: email,
      password: password,
    };

    const res = await fetch('http://localhost:3100/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(addedUser),
    });
    return addedUser;
  }

  async updateUser(id:number, user: usersDTO) {
    const { userName, email, password, isLoggedIn } = user;
    const updatedUser = {
      id: id,
      userName: userName,
      email: email,
      password: password,
      isLoggedIn: isLoggedIn
    };
    const res = await fetch(`http://localhost:3100/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedUser),
    });
    return updatedUser;
  }
}
