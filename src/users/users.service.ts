import { Injectable } from '@nestjs/common';

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
      return this.users.filter(user => user.role === role)
    }

    return this.users
  }

  findOne(id: number) {
    const user = this.users.find(user => user.id === id)
    return user
  }

  create(user: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id)
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...user
    }

    this.users.push(newUser)

    return newUser
  }

  update(id: number, updatedUser: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
    this.users = this.users.map(user => {
      if (user.id === id) {
        return { ...user, ...updatedUser }
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
