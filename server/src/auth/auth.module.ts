import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchema, Auth } from './schemas/auth.schema';
import { JwtTokenModule } from 'src/jwt-token/jwt-token.module';

@Module({
   imports: [MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }]), JwtTokenModule],
   providers: [AuthService],
   controllers: [AuthController],
})
export class AuthModule {}
