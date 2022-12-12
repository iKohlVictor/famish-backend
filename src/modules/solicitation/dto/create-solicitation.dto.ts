import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { TypeSolicitationEnum } from '../enum/type-solicitation.enum';

export class CreateSolicitationDto {
  @IsOptional()
  @IsNumber()
  numberDesk: number;

  @IsOptional()
  @IsEnum(TypeSolicitationEnum)
  typeSolicitation: TypeSolicitationEnum;

  @IsOptional()
  @IsNumber()
  value: number;

  @IsOptional()
  @IsString()
  details: string;

  @IsArray()
  orderItems: CreateOrderTypeDto[];
}

export class CreateOrderTypeDto {
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  productId: number;
}
