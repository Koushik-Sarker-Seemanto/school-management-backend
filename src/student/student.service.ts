import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Class } from '../class/entities/class.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly repository: Repository<Student>,
    @InjectRepository(Class)
    private readonly classRepository: Repository<Class>
  ) {}
  async create(createStudentDto: CreateStudentDto) {
    const student = CreateStudentDto.toModel(createStudentDto);
    student.currentClass = await this.classRepository.findOne({
      where: { id: createStudentDto.currentClassId },
    });
    await this.repository.insert(student);
    return await this.repository.findOne({ where: { id: student.id } });
    // return 'This action adds a new student';
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: string) {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    let exStudent = await this.repository.findOne({ where: { id } });
    exStudent = Object.assign(updateStudentDto);
    exStudent.currentClass = !updateStudentDto.currentClassId
      ? exStudent.currentClass
      : await this.classRepository.findOne({
          where: { id: updateStudentDto.currentClassId },
        });
    exStudent.updatedDate = new Date();
    await this.repository.update(id, updateStudentDto);
    return this.repository.findOne({ where: { id } });
    return `This action updates a #${id} student`;
  }

  async remove(id: string) {
    const deleted = await this.repository.findOne({ where: { id } });
    await this.repository.delete(id);
    return deleted;
  }
}
