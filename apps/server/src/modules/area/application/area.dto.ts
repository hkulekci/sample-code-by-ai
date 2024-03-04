import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class AreaCreateDto {

@IsString()

@IsNotEmpty()
  name: string

@IsString()

@IsOptional()
  datasetId?: string

@IsString()

@IsOptional()
  dateCreated?: string

@IsString()

@IsOptional()
  dateDeleted?: string

@IsString()

@IsOptional()
  dateUpdated?: string

}

export class AreaUpdateDto {

@IsString()

@IsOptional()
  name?: string

@IsString()

@IsOptional()
  datasetId?: string

@IsString()

@IsOptional()
  dateCreated?: string

@IsString()

@IsOptional()
  dateDeleted?: string

@IsString()

@IsOptional()
  dateUpdated?: string

}
