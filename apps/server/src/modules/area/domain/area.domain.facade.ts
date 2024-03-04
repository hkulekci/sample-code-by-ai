import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Area } from './area.model'

import { Dataset } from '../../dataset/domain'

@Injectable()
export class AreaDomainFacade {
  constructor(
    @InjectRepository(Area)
    private repository: Repository<Area>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<Area>,
  ): Promise<Area> {
    return this.repository.save(values)
  }

  async update(
    item: Area,
    values: Partial<Area>,
  ): Promise<Area> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Area): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Area> = {},
  ): Promise<Area[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Area> = {},
  ): Promise<Area> {
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

async findManyByDataset(
    item: Dataset,
    queryOptions: RequestHelper.QueryOptions<Area> = {},
  ): Promise<Area[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('dataset')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        datasetId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

}
