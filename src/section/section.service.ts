import { Injectable } from '@nestjs/common';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Section } from './entities/section.entity';
import { Class } from '../class/entities/class.entity';

@Injectable()
export class SectionService {
  constructor(
    @InjectRepository(Section)
    private readonly repository: Repository<Section>,
    @InjectRepository(Class)
    private readonly classRepository: Repository<Class>
  ) {}
  async create(createSectionDto: CreateSectionDto) {
    const allowedClass = await this.classRepository.findOne({
      where: { id: createSectionDto.classId },
    });
    const section = CreateSectionDto.toModel(createSectionDto);
    section.class = allowedClass;
    await this.repository.insert(section);
    return section;
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: string) {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: string, updateSectionDto: UpdateSectionDto) {
    let exSection = await this.repository.findOne({ where: { id } });
    exSection = Object.assign(updateSectionDto);
    exSection.class = !updateSectionDto.classId
      ? exSection.class
      : await this.classRepository.findOne({
          where: { id: updateSectionDto.classId },
        });
    exSection.updatedDate = new Date();
    await this.repository.update(id, updateSectionDto);
    return this.repository.findOne({ where: { id } });
  }

  async remove(id: string) {
    const deleted = await this.repository.findOne({ where: { id } });
    await this.repository.delete(id);
    return deleted;
  }
}
