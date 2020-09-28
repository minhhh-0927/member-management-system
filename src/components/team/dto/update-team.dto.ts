import { IsString, MaxLength, IsNumber } from 'class-validator';

export class UpdateTeamDto {
  @IsString()
  @MaxLength(255)
  public name: string;

  @IsString()
  @MaxLength(255)
  public description: string;
}
