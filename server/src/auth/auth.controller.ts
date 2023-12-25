import { Body, Controller, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { Token } from 'src/decorator/token.decorator';
import { JwtGuard } from 'src/guards/jwt.guards';
import { AuthService } from './auth.service';
import { RegisterDto, SignInDto } from './dtos/auth.dto';
import { GenerateAccessToken, UserResponseInterface } from './index';

@Controller('auth')
export class AuthController {
   constructor(private readonly authService: AuthService) {}

   @Post('/register')
   @HttpCode(HttpStatus.CREATED)
   async register(@Body() body: RegisterDto): Promise<UserResponseInterface> {
      return this.authService.register(body);
   }

   @Post('/signIn')
   @HttpCode(HttpStatus.OK)
   async signIn(@Body() body: SignInDto): Promise<UserResponseInterface> {
      return this.authService.signIn(body);
   }

   @Token('refresh')
   @UseGuards(JwtGuard)
   @Post('/refresh-token')
   @HttpCode(HttpStatus.OK)
   async refreshToken(@Req() req: Request): Promise<GenerateAccessToken> {
      return this.authService.refreshToken(req);
   }
}
