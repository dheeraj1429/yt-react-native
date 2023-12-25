import { Module } from '@nestjs/common';
import { JwtTokenModule } from './jwt-token/jwt-token.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
   imports: [
      ConfigModule.forRoot({ envFilePath: ['.env.development'], isGlobal: true }),
      MongooseModule.forRoot(process.env.MONGODB_URI),
      JwtTokenModule,
      AuthModule,
   ],
   controllers: [],
   providers: [],
})
export class AppModule {}
