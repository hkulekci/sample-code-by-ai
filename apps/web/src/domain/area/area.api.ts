import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Area } from './area.model'

export class AreaApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Area>,
  ): Promise<Area[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/areas${buildOptions}`)
  }

  static findOne(
    areaId: string,
    queryOptions?: ApiHelper.QueryOptions<Area>,
  ): Promise<Area> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/areas/${areaId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<Area>,
  ): Promise<Area> {
    return HttpService.api.post(`/v1/areas`, values)
  }

  static updateOne(
    areaId: string,
    values: Partial<Area>,
  ): Promise<Area> {
    return HttpService.api.patch(
      `/v1/areas/${areaId}`,
      values,
    )
  }

  static deleteOne(areaId: string): Promise<void> {
    return HttpService.api.delete(`/v1/areas/${areaId}`)
  }

static findManyByDatasetId(
    datasetId: string,
    queryOptions?: ApiHelper.QueryOptions<Area>,
  ): Promise<Area[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/datasets/dataset/${datasetId}/areas${buildOptions}`,
    )
  }

  static createOneByDatasetId(
    datasetId: string,
    values: Partial<Area>,
  ): Promise<Area> {
    return HttpService.api.post(
      `/v1/datasets/dataset/${datasetId}/areas`,
      values,
    )
  }

}
