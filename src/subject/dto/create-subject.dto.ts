import { ApiProperty } from '@nestjs/swagger';
import { Subject } from '../entities/subject.entity';

export class CreateSubjectDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  departmentId: string;

  static toModel(dto: CreateSubjectDto): Subject {
    let subject = new Subject();
    subject = Object.assign(dto);
    subject.createdDate = new Date();
    subject.updatedDate = new Date(0);
    return subject;
  }
}
