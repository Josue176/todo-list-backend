import { IsOptional, IsString } from 'class-validator'; // Import des validateurs [cite: 10]

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;
}