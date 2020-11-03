import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateProjectTeamDto {
    @Expose()
    public teamId: number;

    @Expose()
    public projectId: number;
}
