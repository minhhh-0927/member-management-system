import { Exclude, Expose } from 'class-transformer';
import { RetrieveTeamDto } from '../../team/dto/retrieve.dto';

@Exclude()
export class ProjectDto {
    @Expose()
    public id: number;

    @Expose()
    public name: string;

    @Expose()
    public status: number;

    @Expose()
    public startDate: Date;

    @Expose()
    public endDate: Date;

    @Expose()
    public createdAt: Date;

    @Expose()
    public updatedAt: Date;

    @Expose()
    public teams: Array<RetrieveTeamDto>;
}
