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
  Area,
  AreaDomainFacade,
} from '@server/modules/area/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { AreaApplicationEvent } from './area.application.event'
import {
  AreaCreateDto,
  AreaUpdateDto,
} from './area.dto'

@Controller('/v1/areas')
export class AreaController {
  constructor(
    private eventService: EventService,
    private areaDomainFacade: AreaDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.areaDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: AreaCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.areaDomainFacade.create(body)

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

  @Get('/:areaId')
  async findOne(
    @Param('areaId') areaId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item =
      await this.areaDomainFacade.findOneByIdOrFail(
        areaId,
        queryOptions,
      )

    return item
  }

  @Patch('/:areaId')
  async update(
    @Param('areaId') areaId: string,
    @Body() body: AreaUpdateDto,
  ) {
    const item =
      await this.areaDomainFacade.findOneByIdOrFail(
        areaId,
      )

    const itemUpdated = await this.areaDomainFacade.update(
      item,
      body as Partial<Area>,
    )
    return itemUpdated
  }

  @Delete('/:areaId')
  async delete(@Param('areaId') areaId: string) {
    const item =
      await this.areaDomainFacade.findOneByIdOrFail(
        areaId,
      )

    await this.areaDomainFacade.delete(item)

    return item
  }
}
