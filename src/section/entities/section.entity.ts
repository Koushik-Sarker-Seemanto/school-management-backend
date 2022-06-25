import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../../shared/models/BaseModel';
import { Class } from '../../class/entities/class.entity';

@Entity()
export class Section extends BaseModel {
  @Column()
  public name: string;

  @Column()
  public roomNo: string;

  @Column({ nullable: true })
  public description: string;

  @ManyToOne(() => Class, (studentClass) => studentClass.sections, {
    eager: true,
  })
  @JoinColumn({ name: 'class' })
  public class: Class;
}
