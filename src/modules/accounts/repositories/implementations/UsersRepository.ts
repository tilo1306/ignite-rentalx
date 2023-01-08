import { getRepository, Repository } from "typeorm";

import { ICreateCategoryDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  async create({
    name,
    password,
    email,
    driver_license,
    username,
  }: ICreateCategoryDTO): Promise<void> {
    const user = this.repository.create({
      name,
      password,
      email,
      driver_license,
      username,
    });

    await this.repository.save(user);
  }
  async list(username: string): Promise<User> {
    const user = await this.repository.findOne({ username });

    return user;
  }
}

export { UsersRepository };
