import { IsNotEmpty } from 'class-validator';

export class CreatePositionDto {
    @IsNotEmpty()
    public name: string;
}
