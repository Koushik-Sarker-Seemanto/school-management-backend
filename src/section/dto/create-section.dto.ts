import { ApiProperty } from '@nestjs/swagger';
import { Section } from '../entities/section.entity';

export class CreateSectionDto {
  @ApiProperty()
  public name: string;

  @ApiProperty()
  public roomNo: string;

  @ApiProperty()
  public description: string;

  @ApiProperty()
  public classId: string;

  static toModel(dto: CreateSectionDto): Section {
    let section = new Section();
    section = Object.assign(dto);
    // section.id = uuidv4();
    section.createdDate = new Date();
    section.updatedDate = new Date(0);
    return section;
  }
}
