import { Controller, Get, Request } from '@nestjs/common';
import { TestEntity } from './entities/test-entity.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiResponse, ApiImplicitQuery } from '@nestjs/swagger';
import { executeQuery } from 'odata-v4-typeorm';

@Controller('test-controller')
export class TestControllerController {
  constructor(
    @InjectRepository(TestEntity)
    private readonly testEntityRepository: Repository<TestEntity>,
  ) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Get test entities.',
    type: TestEntity,
    isArray: true,
  })
  @ApiImplicitQuery({ name: '$expand', type: String, required: false })
  @ApiImplicitQuery({ name: '$filter', type: String, required: false })
  @ApiImplicitQuery({ name: '$select', type: String, required: false })
  @ApiImplicitQuery({ name: '$orderby', type: String, required: false })
  @ApiImplicitQuery({ name: '$top', type: Number, required: false })
  @ApiImplicitQuery({ name: '$skip', type: Number, required: false })
  @ApiImplicitQuery({ name: '$count', type: Boolean, required: false }) 
  public query(@Request() req): Promise<TestEntity[]> {
    return executeQuery(this.testEntityRepository, req.query, {});
  }
}
