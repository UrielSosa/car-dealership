import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { BRAND_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from '../brands/brands.service';

@Injectable()
export class SeedService {
  constructor (
    private readonly carsService: CarsService,
    private readonly BrandsService: BrandsService
  ){}

  populateDB() {
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.BrandsService.fillBrandsWithSeedData(BRAND_SEED);
    return `seed excecuted`;
  }
  
}
