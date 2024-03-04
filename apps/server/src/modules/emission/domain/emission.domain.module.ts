import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { EmissionDomainFacade } from './emission.domain.facade'
import { Emission } from './emission.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([Emission]),
    DatabaseHelperModule,
  ],
  providers: [
    EmissionDomainFacade,
    EmissionDomainFacade,
  ],
  exports: [EmissionDomainFacade],
})
export class EmissionDomainModule {}
