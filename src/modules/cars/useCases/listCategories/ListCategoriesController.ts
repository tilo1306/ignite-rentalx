import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCases";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}
  handle(request: Request, response: Response): Response {
    const allCategory = this.listCategoriesUseCase.execute();

    return response.status(200).json(allCategory);
  }
}

export { ListCategoriesController };
