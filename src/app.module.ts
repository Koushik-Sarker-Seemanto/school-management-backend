import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student/entities/student.entity';
import { ClassModule } from './class/class.module';
import { Class } from './class/entities/class.entity';
import { SectionModule } from './section/section.module';
import { Section } from './section/entities/section.entity';
import { TeacherModule } from './teacher/teacher.module';
import { DepartmentModule } from './department/department.module';
import { SubjectModule } from './subject/subject.module';
import { Department } from './department/entities/department.entity';
import { Subject } from './subject/entities/subject.entity';
import { Teacher } from './teacher/entities/teacher.entity';
import { Designation } from './teacher/entities/designation.entity';

@Module({
  imports: [
    StudentModule,
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: '1qazZAQ!',
      database: 'school_management',
      entities: [
        Class,
        Section,
        Student,
        Department,
        Subject,
        Teacher,
        Designation,
      ],
      synchronize: true,
    }),
    ClassModule,
    SectionModule,
    TeacherModule,
    DepartmentModule,
    SubjectModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
