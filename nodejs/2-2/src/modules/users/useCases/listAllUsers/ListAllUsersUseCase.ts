import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const requestingUser = this.usersRepository.findById(user_id);

    if (!requestingUser) {
      throw new Error("Requesting user not found.");
    }

    if (!requestingUser.admin) {
      throw new Error("Requesting user must be an admin.");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
