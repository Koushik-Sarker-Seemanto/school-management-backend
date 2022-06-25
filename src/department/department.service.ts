import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private readonly repository: Repository<Department>
  ) {}
  async create(createDepartmentDto: CreateDepartmentDto) {
    const department = CreateDepartmentDto.toModel(createDepartmentDto);
    await this.repository.insert(department);
    return department;
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: string) {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    updateDepartmentDto.updatedDate = new Date();
    await this.repository.update(id, updateDepartmentDto);
    return this.repository.findOne({ where: { id } });
  }

  async remove(id: string) {
    const deleted = await this.repository.findOne({ where: { id } });
    await this.repository.delete(id);
    return deleted;
  }
}
