import { Module } from '@nestjs/common';
import { JwtTokenModule } from './jwt-token/jwt-token.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BookmarkAndLikeModule } from './bookmark-and-like/bookmark-and-like.module';
import { MoviesModule } from './movies/movies.module';
import { AxiosModule } from './axios/axios.module';

@Module({
   imports: [
      ConfigModule.forRoot({ envFilePath: ['.env.development'], isGlobal: true }),
      MongooseModule.forRoot(process.env.MONGODB_URI),
      JwtTokenModule,
      AuthModule,
      BookmarkAndLikeModule,
      MoviesModule,
      AxiosModule,
   ],
   controllers: [],
   providers: [],
})
export class AppModule {}
