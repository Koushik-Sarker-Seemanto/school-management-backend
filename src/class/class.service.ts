import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Class } from './entities/class.entity';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Class)
    private readonly repository: Repository<Class>
  ) {}

  async create(createClassDto: CreateClassDto) {
    const studentClass = CreateClassDto.toModel(createClassDto);
    await this.repository.insert(studentClass);
    return await this.repository.findOne({ where: { id: studentClass.id } });
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: string) {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: string, updateClassDto: UpdateClassDto) {
    updateClassDto.updatedDate = new Date();
    await this.repository.update(id, updateClassDto);
    return this.repository.findOne({ where: { id } });
  }

  async remove(id: string) {
    const deleted = await this.repository.findOne({ where: { id } });
    await this.repository.delete(id);
    return deleted;
  }
}
