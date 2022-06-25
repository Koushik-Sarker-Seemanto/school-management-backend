import { BaseModel } from '../../shared/models/BaseModel';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';
import { Department } from '../../department/entities/department.entity';
import { Teacher } from '../../teacher/entities/teacher.entity';

@Entity()
export class Subject extends BaseModel {
  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Department, (department) => department.subjects, {
    eager: true,
  })
  @JoinColumn({ name: 'department' })
  department: Department;

  @ManyToMany(() => Teacher, (teacher) => teacher.subjects)
  teachers: Teacher[];
}
