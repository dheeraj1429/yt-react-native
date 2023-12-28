import {
   BadRequestException,
   ConflictException,
   Injectable,
   InternalServerErrorException,
   NotFoundException,
   UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Request } from 'express';
import { Model } from 'mongoose';
import { JwtTokenService } from 'src/jwt-token/jwt-token.service';
import { GenerateAccessToken, UserResponseInterface } from '.';
import { RegisterDto, SignInDto } from './dtos/auth.dto';
import { Auth } from './schemas/auth.schema';

@Injectable()
export class AuthService {
   constructor(
      @InjectModel(Auth.name) private authModel: Model<Auth>,
      private readonly jwtTokenService: JwtTokenService,
   ) {}

   async register(body: RegisterDto): Promise<UserResponseInterface> {
      const { email, password, name, avatar } = body;
      const formattedEmail = email.toLowerCase();
      const isEmailExists = await this.authModel.findOne({ email: formattedEmail }, { email: 1 });
      if (isEmailExists) throw new ConflictException('Email already exists');

      const passwordHash = await bcrypt.hash(password, 10);
      const createNewUser = await new this.authModel({
         name,
         email,
         password: passwordHash,
         avatar,
      }).save();
      if (createNewUser) {
         const accessToken = await this.jwtTokenService.generateToken(
            { _id: createNewUser._id },
            Math.floor(Date.now() / 1000) + 5 * 60,
            process.env.ACCESS_TOKEN_SECRET,
         );
         const refreshToken = await this.jwtTokenService.generateToken(
            { _id: createNewUser._id },
            Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60,
            process.env.REFRESH_TOKEN_SECRET,
         );

         return {
            success: true,
            error: false,
            user: {
               _id: createNewUser._id,
               name: createNewUser.name,
               email,
               avatar: createNewUser.avatar,
               createdAt: createNewUser.createdAt,
               accessToken,
               refreshToken,
            },
         };
      }

      throw new InternalServerErrorException('Internal server error! please try again later');
   }

   async signIn(body: SignInDto): Promise<UserResponseInterface> {
      const { email, password } = body;
      const formattedEmail = email.toLowerCase();
      const isEmailExists = await this.authModel.findOne({ email: formattedEmail });
      if (!isEmailExists) throw new NotFoundException('Email is not available!');
      const isPasswordMatch = await bcrypt.compare(password, isEmailExists.password);
      if (!isPasswordMatch) throw new BadRequestException('Password does not match');

      const accessToken = await this.jwtTokenService.generateToken(
         { _id: isEmailExists._id },
         Math.floor(Date.now() / 1000) + 5 * 60,
         process.env.ACCESS_TOKEN_SECRET,
      );
      const refreshToken = await this.jwtTokenService.generateToken(
         { _id: isEmailExists._id },
         Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60,
         process.env.REFRESH_TOKEN_SECRET,
      );

      return {
         success: true,
         error: false,
         user: {
            _id: isEmailExists._id,
            name: isEmailExists.name,
            email,
            avatar: isEmailExists.avatar,
            createdAt: isEmailExists.createdAt,
            accessToken,
            refreshToken,
         },
      };
   }

   async refreshToken(req: Request): Promise<GenerateAccessToken> {
      const authorization = this.jwtTokenService.getToken(req);
      if (!authorization.token) throw new UnauthorizedException();
      const payload = await this.jwtTokenService.getTokenPayload(authorization.token);
      const accessToken = await this.jwtTokenService.generateToken(
         { _id: payload?._id },
         Math.floor(Date.now() / 1000) + 5 * 60,
         process.env.ACCESS_TOKEN_SECRET,
      );
      return {
         success: true,
         accessToken,
      };
   }
}
