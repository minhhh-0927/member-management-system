import { IsString, MaxLength, IsOptional, IsEmpty } from 'class-validator';
import { isNull } from 'util';

export class RegisterTeamDto {
  @IsString()
  @MaxLength(255)
  public name: string;

  @IsString()
  @IsEmpty()
  @MaxLength(255)
  public description: string;
}
