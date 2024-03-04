import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { DatasetDomainFacade } from './dataset.domain.facade'
import { Dataset } from './dataset.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([Dataset]),
    DatabaseHelperModule,
  ],
  providers: [
    DatasetDomainFacade,
    DatasetDomainFacade,
  ],
  exports: [DatasetDomainFacade],
})
export class DatasetDomainModule {}
