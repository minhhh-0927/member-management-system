import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class RetrieveUserDto {

  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public email: string;

  @Expose()
  public birthday: Date;

  @Expose()
  public team_id: number;
  
  @Expose()
  public position_id: number;

  @Expose()
  public created_at: Date;

  @Expose()
  public updated_at: Date;
}
