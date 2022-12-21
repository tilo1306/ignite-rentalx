import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.post("/", (request, response) =>
  createCategoryController.handle(request, response)
);

categoriesRouter.get("/", (request, response) => {
  const allCategory = categoriesRepository.list();

  return response.status(200).json(allCategory);
});

export { categoriesRouter };
