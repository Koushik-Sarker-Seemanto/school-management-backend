import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from '../../shared/models/BaseModel';
import { Class } from '../../class/entities/class.entity';
import { JoinColumn } from 'typeorm';

@Entity()
export class Student extends BaseModel {
  @Column()
  public name: string;

  @ManyToOne(() => Class, (studentClass) => studentClass.students, {
    eager: true,
  })
  @JoinColumn({ name: 'currentClass' })
  public currentClass: Class;

  @Column()
  public currentSection: string;

  @Column()
  public currentRoll: string;

  @Column()
  public phoneNo: string;

  @Column({ nullable: true })
  public email: string;

  @Column()
  public address: string;

  @Column()
  public fatherName: string;

  @Column()
  public motherName: string;

  @Column({ nullable: true })
  public fatherNo: string;

  @Column({ nullable: true })
  public motherNo: string;
}
