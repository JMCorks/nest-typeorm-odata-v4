import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { TestEntity2 } from './test-entity-2.entity';

@Entity()
export class TestEntity {
  @ApiModelProperty({ type: Number })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty({ type: String })
  @Column({ length: 500 })
  name: string;

  @ApiModelProperty({ type: TestEntity2 })
  @OneToOne(type => TestEntity2)
  @JoinColumn()
  testEntity2: TestEntity2;
}
