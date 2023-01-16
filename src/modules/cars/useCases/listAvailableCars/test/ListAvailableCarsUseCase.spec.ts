/* eslint-disable no-await-in-loop */
/* eslint-disable for-direction */
/* eslint-disable no-plusplus */
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { v4 as uuiV4 } from "uuid";

import { ListAvailableCarsUseCase } from "../ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });
  it("Should be able to list all avaiable cars", async () => {
    for (let i = 0; i < 5; i++) {
      await carsRepositoryInMemory.create({
        name: `car${i}`,
        description: "Car description",
        daily_rate: 600,
        license_plate: "xxx-1234",
        fine_amount: 500,
        brand: "Audi",
        category_id: uuiV4(),
      });
    }

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars.length).toBeGreaterThan(1);
  });

  it("Should be able to list available by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: `car100`,
      description: "Car description",
      daily_rate: 600,
      license_plate: "xxx-1234",
      fine_amount: 500,
      brand: "Car_brand_test",
      category_id: uuiV4(),
    });
    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_brand_test",
    });

    expect(cars).toEqual([car]);
  });
});
