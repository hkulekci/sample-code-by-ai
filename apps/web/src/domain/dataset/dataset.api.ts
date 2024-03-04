import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Dataset } from './dataset.model'

export class DatasetApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Dataset>,
  ): Promise<Dataset[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/datasets${buildOptions}`)
  }

  static findOne(
    datasetId: string,
    queryOptions?: ApiHelper.QueryOptions<Dataset>,
  ): Promise<Dataset> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/datasets/${datasetId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<Dataset>,
  ): Promise<Dataset> {
    return HttpService.api.post(`/v1/datasets`, values)
  }

  static updateOne(
    datasetId: string,
    values: Partial<Dataset>,
  ): Promise<Dataset> {
    return HttpService.api.patch(
      `/v1/datasets/${datasetId}`,
      values,
    )
  }

  static deleteOne(datasetId: string): Promise<void> {
    return HttpService.api.delete(`/v1/datasets/${datasetId}`)
  }

static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Dataset>,
  ): Promise<Dataset[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/datasets${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Dataset>,
  ): Promise<Dataset> {
    return HttpService.api.post(
      `/v1/users/user/${userId}/datasets`,
      values,
    )
  }

}
