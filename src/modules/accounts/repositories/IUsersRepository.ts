import { ICreateCategoryDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  create(data: ICreateCategoryDTO): Promise<void>;
  list(name: string): Promise<User>;
}

export { IUsersRepository };
