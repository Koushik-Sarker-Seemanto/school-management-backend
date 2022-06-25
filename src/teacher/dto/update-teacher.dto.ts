import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTeacherDto } from './create-teacher.dto';

export class UpdateTeacherDto extends PartialType(CreateTeacherDto) {
  @ApiProperty()
  name: string;

  @ApiProperty()
  phoneNo: string;

  @ApiProperty({ nullable: true })
  email: string;

  @ApiProperty({ nullable: true })
  presentAddress: string;

  @ApiProperty()
  permanentAddress: string;

  @ApiProperty()
  designation: string;

  @ApiProperty()
  degree: string;

  @ApiProperty()
  updatedDate: Date;

  @ApiProperty()
  departmentId: string;

  @ApiProperty()
  subjectIds: string[];
}
