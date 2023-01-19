import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";

import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationRepositoryInMemory implements ISpecificationsRepository {
  spefications: Specification[] = [];

  async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
    const specification = new Specification();

    Object.assign(specification, {
      description,
      name,
    });

    this.spefications.push(specification);
  }

  async findByName(name: string): Promise<Specification> {
    return this.spefications.find(
      (specification) => specification.name === name
    );
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const allSpecifications = this.spefications.filter((specification) =>
      ids.includes(specification.id)
    );

    return allSpecifications;
  }
}

export { SpecificationRepositoryInMemory };
