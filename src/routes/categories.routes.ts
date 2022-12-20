import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.post("/", (request, response) => {
  const { name, description } = request.body;

  const nameAlreadyExists = categoriesRepository.findByName(name);

  if (nameAlreadyExists) {
    return response.status(400).json({ error: "Name Already exists" });
  }

  categoriesRepository.create({ name, description });

  return response.status(201).json();
});

categoriesRouter.get("/", (request, response) => {
  const allCategory = categoriesRepository.list();

  return response.status(200).json(allCategory);
});

export { categoriesRouter };
