import { ProfileEnum } from '../enum/profile.enum';
import { IsEmail, IsString, IsNotEmpty, IsEnum } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;

  @IsNotEmpty()
  @IsString()
  phone!: string;

  @IsNotEmpty()
  @IsString()
  address!: string;

  @IsNotEmpty()
  @IsString()
  cpf!: string;

  @IsNotEmpty()
  @IsEnum(ProfileEnum)
  profile!: ProfileEnum;
}
