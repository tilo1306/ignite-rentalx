import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUseCase } from "./ListCategoriesUseCases";

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);
    const allCategory = await listCategoriesUseCase.execute();

    return response.status(200).json(allCategory);
  }
}

export { ListCategoriesController };
