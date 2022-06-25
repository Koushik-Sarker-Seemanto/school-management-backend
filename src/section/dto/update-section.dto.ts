import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateSectionDto } from './create-section.dto';

export class UpdateSectionDto extends PartialType(CreateSectionDto) {
  @ApiProperty()
  public name: string;

  @ApiProperty()
  public roomNo: string;

  @ApiProperty()
  public description: string;

  @ApiProperty()
  public classId: string;

  @ApiProperty()
  public updatedDate: Date;
}
