import { IsString, IsNotEmpty, IsUUID, IsOptional } from "class-validator";


export class UpdateCarDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly model?: string;
}