import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ParseUUIDPipe, ValidationPipe, UsePipes } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './interfaces/dto/create-car.dto';
import { UpdateCarDto } from './interfaces/dto/update-car.dto';

@Controller('cars')
export class CarsController {    
    constructor (
        private readonly cars: CarsService
    ){}

    @Get()
    getAll() {
        return this.cars.all();
    }

    @Get(':id')
    getOne (@Param('id', new ParseUUIDPipe({version: '4'})) id: string) {
        return this.cars.one( id );
    }

    @Post()
    store (@Body() createCarDto: CreateCarDto) {
        return this.cars.store(createCarDto);
    }

    @Patch(':id')
    update (
        @Param('id', new ParseUUIDPipe({version: '4'}) ) id:string,
        @Body() updateCarDto: UpdateCarDto
    ) {
        return this.cars.update(id, updateCarDto);
    }

    @Delete(':id')
    destroy ( @Param('id', ParseUUIDPipe) id: string) {
        return this.cars.delete(id)
    }
}
