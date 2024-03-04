import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Emission } from './emission.model'

import { Area } from '../../area/domain'

@Injectable()
export class EmissionDomainFacade {
  constructor(
    @InjectRepository(Emission)
    private repository: Repository<Emission>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<Emission>,
  ): Promise<Emission> {
    return this.repository.save(values)
  }

  async update(
    item: Emission,
    values: Partial<Emission>,
  ): Promise<Emission> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Emission): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Emission> = {},
  ): Promise<Emission[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Emission> = {},
  ): Promise<Emission> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

async findManyByArea(
    item: Area,
    queryOptions: RequestHelper.QueryOptions<Emission> = {},
  ): Promise<Emission[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('area')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        areaId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

}
