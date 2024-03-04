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

import { User } from '../../../modules/user/domain'

import { Area } from '../../../modules/area/domain'

@Entity()
export class Dataset {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({})

name: string

@Column({"nullable":true})

description?: string

@Column({})

userId: string

@ManyToOne(
  () => User,
  parent => parent.datasets,
  )
  @JoinColumn({ name: 'userId' })

user?: User

@OneToMany(
  () => Area,
  child => child.dataset,
  )

areas?: Area[]

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
