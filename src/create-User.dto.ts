import { IsString, IsEmail } from "class-validator";
export class CreateRegisterDto {
  @IsString()
  name: string;
  @IsString()
  lastName: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
  @IsString()
  birthDate: string;
}
