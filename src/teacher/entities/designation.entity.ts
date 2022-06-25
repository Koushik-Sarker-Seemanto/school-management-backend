import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../shared/models/BaseModel';

@Entity()
export class Designation extends BaseModel {
  @Column()
  name: string;
}
