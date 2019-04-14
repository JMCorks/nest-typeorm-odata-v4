import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestControllerController } from './test-controller/test-controller.controller';
import { TestEntity } from './test-controller/entities/test-entity.entity';

@Module({
  imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([TestEntity])],
  controllers: [AppController, TestControllerController],
  providers: [AppService],
})
export class AppModule {}
