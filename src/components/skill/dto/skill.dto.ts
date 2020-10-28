import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class SkillDto {
    @Expose()
    public id: number;

    @Expose()
    public name: string;

    @Expose()
    public level: string;

    @Expose()
    public experienceYear: number;

    @Expose()
    public createdAt: Date;

    @Expose()
    public updatedAt: Date;
}
