import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { PaymentStatusEnum } from '../enum/payment-status.enum';
import { StatusSolicitationEnum } from '../enum/status-solicitation.enum';
import { TypeSolicitationEnum } from '../enum/type-solicitation.enum';

export class FilterDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  numberDesk: number;

  @IsOptional()
  @IsEnum(TypeSolicitationEnum)
  typeSolicitation: TypeSolicitationEnum;

  @IsOptional()
  @IsEnum(PaymentStatusEnum)
  paymentStatus: PaymentStatusEnum;

  @IsOptional()
  @IsEnum(StatusSolicitationEnum)
  statusSolicitation: StatusSolicitationEnum;

  @IsOptional()
  @IsNumber()
  customerId: number;

  @IsOptional()
  @IsNumber()
  productId: number;
}
