import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class DatasetCreateDto {

@IsString()

@IsNotEmpty()
  name: string

@IsString()

@IsOptional()
  description?: string

@IsString()

@IsOptional()
  userId?: string

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

export class DatasetUpdateDto {

@IsString()

@IsOptional()
  name?: string

@IsString()

@IsOptional()
  description?: string

@IsString()

@IsOptional()
  userId?: string

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
