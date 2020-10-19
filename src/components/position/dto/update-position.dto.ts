import { IsNotEmpty } from 'class-validator';

export class UpdatePositionDto {
    public id: number;

    @IsNotEmpty()
    public name: string;
}
