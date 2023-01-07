import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSpecificarionUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  handle(request: Request, response: Response) {
    const { name, description } = request.body;
    const createSpecificationUseCase = container.resolve(
      CreateSpecificarionUseCase
    );

    createSpecificationUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
