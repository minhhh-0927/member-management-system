import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, Min } from 'class-validator';

@Exclude()
export class CreateSkillDto {
    @Expose()
    @IsNotEmpty()
    public name: string;

    @Expose()
    @IsNotEmpty()
    public level: string;

    @Expose()
    @Min(0)
    @IsNumber()
    public experienceYear: number;
}
