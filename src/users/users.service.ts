import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      "id": 1,
      "name": "Omar Villanueva",
      "email": "yanhez@gmail.com",
      "role": "INTERN",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "email": "ervin.howell@melissa.tv",
      "role": "INTERN",
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "email": "clementine.bauch@yesenia.net",
      "role": "ENGINEER",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "email": "patricia.lebsack@kory.org",
      "role": "ENGINEER",
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "email": "chelsey@annie.ca",
      "role": "ADMIN",
    },
  ]

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      const usersByRole = this.users.filter(user => user.role === role)
      if (usersByRole.length === 0) throw new NotFoundException('User Role Not Found')
      return usersByRole
    }

    return this.users
  }

  findOne(id: number) {
    const user = this.users.find(user => user.id === id)

    if (!user) throw new NotFoundException('Unser Not Found')

    return user
  }

  create(createUserDto: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id)
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...createUserDto
    }

    this.users.push(newUser)

    return newUser
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map(user => {
      if (user.id === id) {
        return { ...user, ...updateUserDto }
      }
      return user
    })

    return this.findOne(id)
  }

  delete(id: number) {
    const removedUser = this.findOne(id)

    this.users = this.users.filter(user => user.id !== id)

    return removedUser
  }
}
