import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class EmissionCreateDto {

@IsNumber()

@IsNotEmpty()
  co2Amount: number

@IsNumber()

@IsNotEmpty()
  year: number

@IsString()

@IsOptional()
  areaId?: string

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

export class EmissionUpdateDto {

@IsNumber()

@IsOptional()
  co2Amount?: number

@IsNumber()

@IsOptional()
  year?: number

@IsString()

@IsOptional()
  areaId?: string

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
