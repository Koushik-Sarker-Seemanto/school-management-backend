import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student/entities/student.entity';
import { ClassModule } from './class/class.module';
import { Class } from './class/entities/class.entity';

@Module({
  imports: [
    StudentModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'school_management',
      entities: [Class, Student],
      synchronize: true,
    }),
    ClassModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
