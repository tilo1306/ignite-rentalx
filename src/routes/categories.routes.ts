import { Router } from "express";
import { v4 as uuidV4 } from "uuid";

import { Category } from "../model/category";

const categoriesRouter = Router();
const categories: Category[] = [];

categoriesRouter.post("/", (request, response) => {
  const { name, description } = request.body;

  const category = new Category();

  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  console.log(category);

  categories.push(category);

  return response.status(201).json({ category });
});

export { categoriesRouter };
