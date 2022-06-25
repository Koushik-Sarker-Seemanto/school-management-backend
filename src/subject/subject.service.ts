import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from './entities/subject.entity';
import { Department } from '../department/entities/department.entity';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private readonly repository: Repository<Subject>,
    @InjectRepository(Department)
    private readonly deptRepository: Repository<Department>
  ) {}
  async create(createSubjectDto: CreateSubjectDto) {
    const department = await this.deptRepository.findOne({
      where: { id: createSubjectDto.departmentId },
    });
    const subject = CreateSubjectDto.toModel(createSubjectDto);
    subject.department = department;
    await this.repository.insert(subject);
    return subject;
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: string) {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: string, updateSubjectDto: UpdateSubjectDto) {
    let exSubject = await this.repository.findOne({ where: { id } });
    exSubject = Object.assign(updateSubjectDto);
    exSubject.department = !updateSubjectDto.departmentId
      ? exSubject.department
      : await this.deptRepository.findOne({
          where: { id: updateSubjectDto.departmentId },
        });
    exSubject.updatedDate = new Date();
    await this.repository.update(id, updateSubjectDto);
    return this.repository.findOne({ where: { id } });
  }

  async remove(id: string) {
    const deleted = await this.repository.findOne({ where: { id } });
    await this.repository.delete(id);
    return deleted;
  }
}
