import { BaseModel } from '../../shared/models/BaseModel';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Subject } from '../../subject/entities/subject.entity';
import { Teacher } from '../../teacher/entities/teacher.entity';

@Entity()
export class Department extends BaseModel {
  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Subject, (subject) => subject.department)
  subjects: Subject[];

  @OneToMany(() => Teacher, (teacher) => teacher.department)
  teachers: Teacher[];
}
