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
  Dataset,
  DatasetDomainFacade,
} from '@server/modules/dataset/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { DatasetApplicationEvent } from './dataset.application.event'
import {
  DatasetCreateDto,
  DatasetUpdateDto,
} from './dataset.dto'

@Controller('/v1/datasets')
export class DatasetController {
  constructor(
    private eventService: EventService,
    private datasetDomainFacade: DatasetDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.datasetDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: DatasetCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.datasetDomainFacade.create(body)

    await this.eventService.emit<DatasetApplicationEvent.DatasetCreated.Payload>(
      DatasetApplicationEvent
        .DatasetCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:datasetId')
  async findOne(
    @Param('datasetId') datasetId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item =
      await this.datasetDomainFacade.findOneByIdOrFail(
        datasetId,
        queryOptions,
      )

    return item
  }

  @Patch('/:datasetId')
  async update(
    @Param('datasetId') datasetId: string,
    @Body() body: DatasetUpdateDto,
  ) {
    const item =
      await this.datasetDomainFacade.findOneByIdOrFail(
        datasetId,
      )

    const itemUpdated = await this.datasetDomainFacade.update(
      item,
      body as Partial<Dataset>,
    )
    return itemUpdated
  }

  @Delete('/:datasetId')
  async delete(@Param('datasetId') datasetId: string) {
    const item =
      await this.datasetDomainFacade.findOneByIdOrFail(
        datasetId,
      )

    await this.datasetDomainFacade.delete(item)

    return item
  }
}
