import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { inject } from "tsyringe";

class ListRentalsByUserUseCase {
  constructor(
    @inject("RentalsRepository")
    private rentalsRepository: IRentalsRepository
  ) {}
  async execute(user_id: string) {
    const rentalsByUser = await this.rentalsRepository.findByUser(user_id);

    return rentalsByUser;
  }
}

export { ListRentalsByUserUseCase };
