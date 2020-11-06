import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';

@Exclude()
export class CreateProjectDto {
    @Expose()
    @IsNotEmpty()
    public name: string;

    @Expose()
    @IsOptional()
    public status: number;

    @Expose()
    @IsOptional()
    public startDate: Date;

    @Expose()
    @IsOptional()
    public endDate: Date;
}
