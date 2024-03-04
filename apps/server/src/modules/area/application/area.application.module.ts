import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { AreaDomainModule } from '../domain'
import { AreaController } from './area.controller'

import { DatasetDomainModule } from '../../../modules/dataset/domain'

import { AreaByDatasetController } from './areaByDataset.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    AreaDomainModule,

DatasetDomainModule,

],
  controllers: [
    AreaController,
    
    AreaByDatasetController,
    
  ],
  providers: [],
})
export class AreaApplicationModule {}
