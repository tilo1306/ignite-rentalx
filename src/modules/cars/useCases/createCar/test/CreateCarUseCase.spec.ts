import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { CreateCarUseCase } from "../CreateCarUseCase";

let createCarUsecase: CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory;

describe("Create Car", () => {
  const userCar = {
    name: "name car",
    description: "Description Car",
    daily_rate: 100,
    license_plate: "ABC-1234",
    fine_amount: 60,
    brand: "Brand",
    category_id: "category",
  };
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createCarUsecase = new CreateCarUseCase(carsRepository);
  });
  it("Should be able to create a new car", async () => {
    const newCar = await createCarUsecase.execute(userCar);

    expect(newCar).not.toBeInstanceOf(Error);
    expect(newCar).toHaveProperty("id");
    expect(newCar).toHaveProperty("name");
    expect(newCar).toHaveProperty("description");
    expect(newCar).toHaveProperty("daily_rate");
    expect(newCar).toHaveProperty("available");
    expect(newCar).toHaveProperty("license_plate");
    expect(newCar).toHaveProperty("fine_amount");
    expect(newCar).toHaveProperty("brand");
    expect(newCar).toHaveProperty("category_id");
  });
  it("Should not be able to create a car with exists license plate", async () => {
    try {
      await createCarUsecase.execute(userCar);
      await createCarUsecase.execute(userCar);
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe("Car already exists!");
    }
  });
  it("Should not be able to create a car with available true by default", async () => {
    const newCar = await createCarUsecase.execute(userCar);
    expect(newCar.available).toBe(true);
  });
});
