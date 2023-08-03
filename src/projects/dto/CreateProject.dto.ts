import { IsNotEmpty, IsTimeZone, isNotEmpty } from 'class-validator';

export class CreateProjectDTO {
  @IsNotEmpty({ message: 'name cannot be empty' })
  public name: string;
  @IsNotEmpty()
  public imageUrl: string;
  @IsTimeZone()
  public details: string;
  @IsNotEmpty()
  public deployedUrl: string;
  @IsNotEmpty()
  public githubUrl: string;
}
