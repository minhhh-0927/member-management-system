import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, Min } from 'class-validator';

@Exclude()
export class UpdateSkillDto {
    @Expose()
    public id: number;

    @Expose()
    public name: string;

    @Expose()
    public level: string;

    @Expose()
    @Min(0)
    @IsNumber()
    @IsOptional()
    public experienceYear: number;
}
