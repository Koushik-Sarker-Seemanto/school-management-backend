import { ApiProperty } from '@nestjs/swagger';
import { Student } from '../entities/student.entity';
import { v4 as uuidv4 } from 'uuid';

export class CreateStudentDto {
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

  static toModel(dto: CreateStudentDto): Student {
    const student: Student = new Student();
    student.name = dto.name;
    student.address = dto.address;
    student.currentRoll = dto.currentRoll;
    student.currentSection = dto.currentSection;
    student.fatherName = dto.fatherName;
    student.motherName = dto.motherName;
    student.fatherNo = dto.fatherNo;
    student.motherNo = dto.motherNo;
    student.email = dto.email;
    student.phoneNo = dto.phoneNo;
    // student.id = uuidv4();
    student.createdDate = new Date();
    student.updatedDate = new Date(0);
    return student;
  }
}
