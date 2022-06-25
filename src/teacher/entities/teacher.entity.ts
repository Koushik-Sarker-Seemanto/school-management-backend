import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { BaseModel } from '../../shared/models/BaseModel';
import { Department } from '../../department/entities/department.entity';
import { Subject } from '../../subject/entities/subject.entity';

@Entity()
export class Teacher extends BaseModel {
  @Column()
  name: string;

  @Column()
  phoneNo: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  presentAddress: string;

  @Column()
  permanentAddress: string;

  @Column()
  designation: string;

  @Column()
  degree: string;

  @ManyToOne(() => Department, (dept) => dept.teachers, { eager: true })
  @JoinColumn({ name: 'department' })
  department: Department;

  @ManyToMany(() => Subject, (subject) => subject.teachers, {
    eager: true,
  })
  @JoinTable()
  subjects: Subject[];
}
