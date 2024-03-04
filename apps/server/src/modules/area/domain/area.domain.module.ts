import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { AreaDomainFacade } from './area.domain.facade'
import { Area } from './area.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([Area]),
    DatabaseHelperModule,
  ],
  providers: [
    AreaDomainFacade,
    AreaDomainFacade,
  ],
  exports: [AreaDomainFacade],
})
export class AreaDomainModule {}
