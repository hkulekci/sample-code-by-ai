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

import { Dataset } from '../../../modules/dataset/domain'

import { Emission } from '../../../modules/emission/domain'

@Entity()
export class Area {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({})

name: string

@Column({})

datasetId: string

@ManyToOne(
  () => Dataset,
  parent => parent.areas,
  )
  @JoinColumn({ name: 'datasetId' })

dataset?: Dataset

@OneToMany(
  () => Emission,
  child => child.area,
  )

emissions?: Emission[]

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
