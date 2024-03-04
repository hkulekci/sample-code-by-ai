import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Area } from '../../../modules/area/domain'

@Entity()
export class Emission {

@PrimaryGeneratedColumn('uuid')

id: string

@ColumnNumeric({"type":"numeric"})

co2Amount: number

@ColumnNumeric({"type":"numeric"})

year: number

@Column({})

areaId: string

@ManyToOne(
  () => Area,
  parent => parent.emissions,
  )
  @JoinColumn({ name: 'areaId' })

area?: Area

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
