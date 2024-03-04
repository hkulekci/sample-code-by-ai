import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { AreaDomainFacade } from '@server/modules/area/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { AreaApplicationEvent } from './area.application.event'
import { AreaCreateDto } from './area.dto'

import { DatasetDomainFacade } from '../../dataset/domain'

@Controller('/v1/datasets')
export class AreaByDatasetController {
  constructor(
    
    private datasetDomainFacade: DatasetDomainFacade,
    
    private areaDomainFacade: AreaDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/dataset/:datasetId/areas')
  async findManyDatasetId(
    @Param('datasetId') datasetId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.datasetDomainFacade.findOneByIdOrFail(
        datasetId,
      )

    const items =
      await this.areaDomainFacade.findManyByDataset(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/dataset/:datasetId/areas')
  async createByDatasetId(
    @Param('datasetId') datasetId: string,
    @Body() body: AreaCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, datasetId }

    const item = await this.areaDomainFacade.create(valuesUpdated)

    await this.eventService.emit<AreaApplicationEvent.AreaCreated.Payload>(
      AreaApplicationEvent
        .AreaCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
  
}
