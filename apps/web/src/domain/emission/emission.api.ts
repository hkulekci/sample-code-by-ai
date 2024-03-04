import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Emission } from './emission.model'

export class EmissionApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Emission>,
  ): Promise<Emission[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/emissions${buildOptions}`)
  }

  static findOne(
    emissionId: string,
    queryOptions?: ApiHelper.QueryOptions<Emission>,
  ): Promise<Emission> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/emissions/${emissionId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<Emission>,
  ): Promise<Emission> {
    return HttpService.api.post(`/v1/emissions`, values)
  }

  static updateOne(
    emissionId: string,
    values: Partial<Emission>,
  ): Promise<Emission> {
    return HttpService.api.patch(
      `/v1/emissions/${emissionId}`,
      values,
    )
  }

  static deleteOne(emissionId: string): Promise<void> {
    return HttpService.api.delete(`/v1/emissions/${emissionId}`)
  }

static findManyByAreaId(
    areaId: string,
    queryOptions?: ApiHelper.QueryOptions<Emission>,
  ): Promise<Emission[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/areas/area/${areaId}/emissions${buildOptions}`,
    )
  }

  static createOneByAreaId(
    areaId: string,
    values: Partial<Emission>,
  ): Promise<Emission> {
    return HttpService.api.post(
      `/v1/areas/area/${areaId}/emissions`,
      values,
    )
  }

}
