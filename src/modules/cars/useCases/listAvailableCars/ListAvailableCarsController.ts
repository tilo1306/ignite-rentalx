import { Request, Response } from "express";

class ListAvailableCarsController {
  async handle(request: Request, response: Response) {
    const { brand, name, category } = request;
  }
}

export { ListAvailableCarsController };
