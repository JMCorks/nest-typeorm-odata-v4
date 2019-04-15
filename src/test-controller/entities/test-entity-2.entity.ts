import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { TestEntity } from './test-entity.entity';

@Entity()
export class TestEntity2 {
  @ApiModelProperty({ type: Number })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty({ type: String })
  @Column()
  columnTest: string;

  @ApiModelProperty({ type: TestEntity })
  @OneToOne(type => TestEntity)
  @JoinColumn()
  testEntity: TestEntity;
}
