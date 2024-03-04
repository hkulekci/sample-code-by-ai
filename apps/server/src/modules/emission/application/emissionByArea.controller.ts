import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { EmissionDomainFacade } from '@server/modules/emission/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { EmissionApplicationEvent } from './emission.application.event'
import { EmissionCreateDto } from './emission.dto'

import { AreaDomainFacade } from '../../area/domain'

@Controller('/v1/areas')
export class EmissionByAreaController {
  constructor(
    
    private areaDomainFacade: AreaDomainFacade,
    
    private emissionDomainFacade: EmissionDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/area/:areaId/emissions')
  async findManyAreaId(
    @Param('areaId') areaId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.areaDomainFacade.findOneByIdOrFail(
        areaId,
      )

    const items =
      await this.emissionDomainFacade.findManyByArea(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/area/:areaId/emissions')
  async createByAreaId(
    @Param('areaId') areaId: string,
    @Body() body: EmissionCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, areaId }

    const item = await this.emissionDomainFacade.create(valuesUpdated)

    await this.eventService.emit<EmissionApplicationEvent.EmissionCreated.Payload>(
      EmissionApplicationEvent
        .EmissionCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
  
}
