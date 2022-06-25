import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseModel {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public createdDate: Date;

  @Column()
  public updatedDate: Date;
}
