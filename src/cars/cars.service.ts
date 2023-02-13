import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './interfaces/dto/create-car.dto';
import { UpdateCarDto } from './interfaces/dto/update-car.dto';

@Injectable()
export class CarsService {
    
    private cars: Car[] = [
        {
            id: uuid(), 
            brand: 'Toyota', 
            model: 'Corolla'
        }, 
        {
            id: uuid(), 
            brand: 'Honda', 
            model: 'Civic'
        }, 
        {
            id: uuid(), 
            brand: 'Fiat', 
            model: 'Cronos'
        }
    ];

    all () {
        return this.cars;
    }
    
    one (id: string) {
        const car = this.cars.find(car => car.id === id);
        
        if(!car) throw new NotFoundException(`Car with id ${id} not found`);
        
        return car;
    }

    store (createCarDto: CreateCarDto) {
        const car: Car = {
            id: uuid(), 
            ...createCarDto
        }
        
        this.cars.push(car);

        return car;
    }

    update (id: string, updateCarDto: UpdateCarDto) {
        let carDB = this.one(id);

        if (updateCarDto.id && updateCarDto !== id) {
            throw new BadRequestException('Car id is not valid ')
        }

        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDB = { ...carDB, ...updateCarDto, id };
                return carDB
            }
            return car;
        });

        return carDB;
    }

    delete (id: string) {
        const car = this.one(id);
        this.cars = this.cars.filter(car => car.id !== id);
    }


}
