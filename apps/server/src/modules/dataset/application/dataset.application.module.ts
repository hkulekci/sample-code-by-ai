import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { DatasetDomainModule } from '../domain'
import { DatasetController } from './dataset.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { DatasetByUserController } from './datasetByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    DatasetDomainModule,

UserDomainModule,

],
  controllers: [
    DatasetController,
    
    DatasetByUserController,
    
  ],
  providers: [],
})
export class DatasetApplicationModule {}
