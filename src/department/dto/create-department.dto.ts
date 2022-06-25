import { ApiProperty } from '@nestjs/swagger';
import { Department } from '../entities/department.entity';

export class CreateDepartmentDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  static toModel(dto: CreateDepartmentDto): Department {
    let department = new Department();
    department = Object.assign(dto);
    department.createdDate = new Date();
    department.updatedDate = new Date(0);
    return department;
  }
}
