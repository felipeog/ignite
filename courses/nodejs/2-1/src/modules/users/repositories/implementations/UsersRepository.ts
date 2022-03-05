import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const newUser = new User();

    Object.assign(newUser, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(newUser);

    return newUser;
  }

  findById(id: string): User | undefined {
    return this.users.find((user) => {
      return user.id === id;
    });
  }

  findByEmail(email: string): User | undefined {
    return this.users.find((user) => {
      return user.email === email;
    });
  }

  turnAdmin(receivedUser: User): User {
    const indexToUpdate = this.users.findIndex((user) => {
      return user.id === receivedUser.id;
    });
    const updatedUser = {
      ...receivedUser,
      admin: true,
      updated_at: new Date(),
    };

    this.users.splice(indexToUpdate, 1, updatedUser);

    return updatedUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
