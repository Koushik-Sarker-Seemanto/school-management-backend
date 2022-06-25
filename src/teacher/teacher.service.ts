import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from '../department/entities/department.entity';
import { Repository } from 'typeorm';
import { Teacher } from './entities/teacher.entity';
import { Subject } from '../subject/entities/subject.entity';
import { Designation } from './entities/designation.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private readonly repository: Repository<Teacher>,
    @InjectRepository(Department)
    private readonly deptRepository: Repository<Department>,
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>,
    @InjectRepository(Designation)
    private readonly designationRepository: Repository<Designation>
  ) {}
  async create(createTeacherDto: CreateTeacherDto) {
    const dept = await this.deptRepository.findOne({
      where: { id: createTeacherDto.departmentId },
    });
    const subjects = await this.subjectRepository.findByIds(
      createTeacherDto.subjectIds
    );
    const teacher = CreateTeacherDto.toModel(createTeacherDto, dept, subjects);
    await this.repository.save(teacher);
    return await this.repository.findOne({ where: { id: teacher.id } });
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: string) {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: string, updateTeacherDto: UpdateTeacherDto) {
    let exTeacher = await this.repository.findOne({ where: { id } });
    exTeacher = Object.assign(updateTeacherDto);
    exTeacher.department = !updateTeacherDto.departmentId
      ? exTeacher.department
      : await this.deptRepository.findOne({
          where: { id: updateTeacherDto.departmentId },
        });
    exTeacher.subjects = !updateTeacherDto.subjectIds
      ? exTeacher.subjects
      : await this.subjectRepository.findByIds(updateTeacherDto.subjectIds);
    exTeacher.updatedDate = new Date();
    await this.repository.update(id, updateTeacherDto);
    return this.repository.findOne({ where: { id } });
  }

  async remove(id: string) {
    const deleted = await this.repository.findOne({ where: { id } });
    await this.repository.delete(id);
    return deleted;
  }

  async findAllDesignation() {
    return await this.designationRepository.find();
  }
}
