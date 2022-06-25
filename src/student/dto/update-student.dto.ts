import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  @ApiProperty()
  public name: string;

  @ApiProperty()
  public currentClassId: string;

  @ApiProperty()
  public currentSection: string;

  @ApiProperty()
  public currentRoll: string;

  @ApiProperty()
  public phoneNo: string;

  @ApiProperty()
  public email: string;

  @ApiProperty()
  public address: string;

  @ApiProperty()
  public fatherName: string;

  @ApiProperty()
  public motherName: string;

  @ApiProperty()
  public fatherNo: string;

  @ApiProperty()
  public motherNo: string;

  @ApiProperty()
  public updatedDate: Date;
}
