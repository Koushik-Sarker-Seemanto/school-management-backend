import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDepartmentDto } from './create-department.dto';

export class UpdateDepartmentDto extends PartialType(CreateDepartmentDto) {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  updatedDate: Date;
}
