import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';
import { Department } from '../department/entities/department.entity';
import { Subject } from '../subject/entities/subject.entity';
import { Designation } from './entities/designation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Teacher, Department, Subject, Designation]),
  ],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
