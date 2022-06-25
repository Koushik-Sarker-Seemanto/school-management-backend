import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from './entities/subject.entity';
import { Department } from '../department/entities/department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subject, Department])],
  controllers: [SubjectController],
  providers: [SubjectService],
})
export class SubjectModule {}
