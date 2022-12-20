import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategory = new CreateCategoryService(categoriesRepository);

  createCategory.execute({ name, description });

  return response.status(201).json();
});

categoriesRouter.get("/", (request, response) => {
  const allCategory = categoriesRepository.list();

  return response.status(200).json(allCategory);
});

export { categoriesRouter };
