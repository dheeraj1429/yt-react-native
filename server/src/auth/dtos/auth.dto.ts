import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class UserCredentialsDto {
   @IsNotEmpty()
   @IsEmail()
   readonly email: string;

   @IsNotEmpty()
   @IsString()
   @MinLength(4)
   @MaxLength(20)
   @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
      message: 'password too weak',
   })
   password: string;
}

export class RegisterDto extends UserCredentialsDto {
   readonly name: string;
   readonly avatar: string;
}

export class SignInDto extends UserCredentialsDto {}
