import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

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
    getOne (@Param('id', ParseIntPipe) id: number) {
        return this.cars.one( +id );
    }

    @Post()
    store (@Body() body:any) {
        return body;
    }

    @Patch(':id')
    update (
        @Param('id', ParseIntPipe ) id:number,
        @Body() body:any
    ) {
        return {body, id};
    }

    @Delete(':id')
    destroy ( @Param('id', ParseIntPipe) id: number) {
        return {
            method: 'delete',
            id
        }
    }
}
