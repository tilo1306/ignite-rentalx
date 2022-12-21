import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ description, name }: IRequest) {
    const nameAlreadyExists = this.categoriesRepository.findByName(name);

    if (nameAlreadyExists) {
      throw new Error("Name Already exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
