import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { DatasetDomainModule } from './dataset/domain'

import { AreaDomainModule } from './area/domain'

import { EmissionDomainModule } from './emission/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

DatasetDomainModule,

AreaDomainModule,

EmissionDomainModule,

],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
