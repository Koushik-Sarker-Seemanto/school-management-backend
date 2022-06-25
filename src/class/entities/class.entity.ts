import { BaseModel } from '../../shared/models/BaseModel';
import { Column, Entity, OneToMany } from 'typeorm';
import { Section } from '../../section/entities/section.entity';
import { Student } from '../../student/entities/student.entity';

@Entity()
export class Class extends BaseModel {
  @Column()
  public name: string;

  @Column({ nullable: true })
  public description: string;

  @OneToMany(() => Student, (student) => student.currentClass)
  students: Student[];

  @OneToMany(() => Section, (section) => section.class)
  sections: Section[];
}
