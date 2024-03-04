import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { EmissionDomainModule } from '../domain'
import { EmissionController } from './emission.controller'

import { AreaDomainModule } from '../../../modules/area/domain'

import { EmissionByAreaController } from './emissionByArea.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    EmissionDomainModule,

AreaDomainModule,

],
  controllers: [
    EmissionController,
    
    EmissionByAreaController,
    
  ],
  providers: [],
})
export class EmissionApplicationModule {}
