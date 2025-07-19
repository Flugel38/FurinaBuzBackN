import { Injectable } from '@nestjs/common';

interface User {
  id: number;
  name: string;
  email: string;
}


@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'An', email: 'an@example.com' },
    { id: 2, name: 'Nam', email: 'nam@example.com' },
  ];

  findAll(): User[] {
    return this.users;
  }
  findOne(id: number): User | undefined {
    return this.users.find((u) => u.id === id);
  }

  create(user: Omit<User, 'id'>): User {
    const newUser = { ...user, id: Date.now() };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, data: Partial<User>): User | undefined {
    const user = this.findOne(id);
    if (user) {
      Object.assign(user, data);
    }
    return user;
  }

  delete(id: number): boolean {
    const index = this.users.findIndex((u) => u.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
}
