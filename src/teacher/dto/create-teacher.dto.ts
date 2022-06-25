import { Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Teacher } from '../entities/teacher.entity';
import { Department } from '../../department/entities/department.entity';
import { Subject } from '../../subject/entities/subject.entity';

export class CreateTeacherDto {
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
  departmentId: string;

  @ApiProperty()
  subjectIds: string[];

  static toModel(
    dto: CreateTeacherDto,
    department: Department,
    subjects: Subject[]
  ): Teacher {
    let teacher = new Teacher();
    teacher = Object.assign(dto);
    teacher.createdDate = new Date();
    teacher.updatedDate = new Date(0);
    teacher.department = department;
    teacher.subjects = subjects;
    return teacher as Teacher;
  }
}
