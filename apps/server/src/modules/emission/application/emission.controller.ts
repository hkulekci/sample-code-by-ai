import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import {
  Emission,
  EmissionDomainFacade,
} from '@server/modules/emission/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { EmissionApplicationEvent } from './emission.application.event'
import {
  EmissionCreateDto,
  EmissionUpdateDto,
} from './emission.dto'

@Controller('/v1/emissions')
export class EmissionController {
  constructor(
    private eventService: EventService,
    private emissionDomainFacade: EmissionDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.emissionDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: EmissionCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.emissionDomainFacade.create(body)

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

  @Get('/:emissionId')
  async findOne(
    @Param('emissionId') emissionId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item =
      await this.emissionDomainFacade.findOneByIdOrFail(
        emissionId,
        queryOptions,
      )

    return item
  }

  @Patch('/:emissionId')
  async update(
    @Param('emissionId') emissionId: string,
    @Body() body: EmissionUpdateDto,
  ) {
    const item =
      await this.emissionDomainFacade.findOneByIdOrFail(
        emissionId,
      )

    const itemUpdated = await this.emissionDomainFacade.update(
      item,
      body as Partial<Emission>,
    )
    return itemUpdated
  }

  @Delete('/:emissionId')
  async delete(@Param('emissionId') emissionId: string) {
    const item =
      await this.emissionDomainFacade.findOneByIdOrFail(
        emissionId,
      )

    await this.emissionDomainFacade.delete(item)

    return item
  }
}
