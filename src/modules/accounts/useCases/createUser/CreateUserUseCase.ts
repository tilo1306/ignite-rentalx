import { inject, injectable } from "tsyringe";

import { ICreateCategoryDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({
    name,
    email,
    username,
    password,
    driver_license,
  }: ICreateCategoryDTO) {
    const usernameAlreadyExists = await this.usersRepository.list(username);

    if (usernameAlreadyExists) {
      throw new Error("Username Already exists");
    }

    this.usersRepository.create({
      name,
      email,
      username,
      password,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
