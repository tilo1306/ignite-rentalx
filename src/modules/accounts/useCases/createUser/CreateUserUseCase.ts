import { inject, injectable } from "tsyringe";

import { ICreateCategoryDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ name, email, password, driver_license }: ICreateCategoryDTO) {
    const usernameAlreadyExists = await this.usersRepository.list(name);

    if (usernameAlreadyExists) {
      throw new Error("Name Already exists");
    }

    this.usersRepository.create({
      name,
      email,
      password,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
