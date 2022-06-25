import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateSubjectDto } from './create-subject.dto';

export class UpdateSubjectDto extends PartialType(CreateSubjectDto) {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  departmentId: string;

  @ApiProperty()
  updatedDate: Date;
}
