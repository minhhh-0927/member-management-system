import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ProjectTeamDto {
    @Expose()
    public id: number;

    @Expose()
    public teamId: number;

    @Expose()
    public projectId: number;

    @Expose()
    public createdAt: Date;

    @Expose()
    public updatedAt: Date;
}
