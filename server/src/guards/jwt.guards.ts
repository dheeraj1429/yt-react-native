import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtTokenService } from '../jwt-token/jwt-token.service';

@Injectable()
export class JwtGuard implements CanActivate {
   constructor(private readonly jwtTokenService: JwtTokenService, private readonly reflector: Reflector) {}

   async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      const authorization = this.jwtTokenService.getToken(request.headers);
      if (!authorization.token) throw new UnauthorizedException();
      const token = this.reflector.get<string[]>('token', context.getHandler());
      const isValid = await this.jwtTokenService.validateToken(
         authorization?.token,
         !!token && token.includes('refresh') ? process.env.REFRESH_TOKEN_SECRET : process.env.ACCESS_TOKEN_SECRET,
      );
      return !!isValid;
   }
}
