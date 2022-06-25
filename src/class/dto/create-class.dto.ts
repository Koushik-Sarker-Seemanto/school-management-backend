import { Class } from '../entities/class.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClassDto {
  @ApiProperty()
  public name: string;

  @ApiProperty()
  public description: string;

  static toModel(dto: CreateClassDto): Class {
    let studentClass = new Class();
    studentClass = Object.assign(dto);
    studentClass.createdDate = new Date();
    studentClass.updatedDate = new Date(0);
    return studentClass;
  }
}
