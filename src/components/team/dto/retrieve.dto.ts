import { Exclude, Expose} from 'class-transformer';

@Exclude()
export class RetrieveTeamDto {

  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public created_at: Date;

  @Expose()
  public updated_at: Date;
}
