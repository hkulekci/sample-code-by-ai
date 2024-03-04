import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationDatasetSubscriber } from './subscribers/notification.dataset.subscriber'

import { NotificationAreaSubscriber } from './subscribers/notification.area.subscriber'

import { NotificationEmissionSubscriber } from './subscribers/notification.emission.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [

NotificationDatasetSubscriber,

NotificationAreaSubscriber,

NotificationEmissionSubscriber,

],
  exports: [],
})
export class NotificationInfrastructureModule {}
