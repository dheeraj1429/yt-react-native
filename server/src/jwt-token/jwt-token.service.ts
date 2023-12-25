import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class JwtTokenService {
   constructor(private readonly jwtService: JwtService) {}

   async generateToken(payload: any, expiresIn: number, secret: string): Promise<string> {
      const token = await this.jwtService.sign(payload, { expiresIn, secret });
      return token;
   }

   async validateToken(token: string, secret: string | Buffer): Promise<boolean> {
      try {
         const validate = await this.jwtService.verify(token, { secret });
         if (!validate) throw new ForbiddenException('Token expired');
         return true;
      } catch (err) {
         throw new ForbiddenException('Invalid token');
      }
   }

   getToken(req: Request): { token: string | null } {
      const authorization: string = req?.['authorization'] || req?.headers?.['authorization'];
      if (!authorization) return { token: null };
      const token = authorization.split(' ');
      if (token.length !== 2) return { token: null };
      return { token: token[1] };
   }

   getTokenPayload(token: string): { [key: string]: any } {
      const payload = this.jwtService.decode(token) as { id: string };
      return payload;
   }
}
