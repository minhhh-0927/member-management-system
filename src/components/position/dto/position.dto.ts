import { Exclude, Expose } from 'class-transformer';

export class PositionDto {
    @Exclude()
    public id: number;

    public name: string;
    public createdAt: Date;
    public updatedAt: Date;
}
