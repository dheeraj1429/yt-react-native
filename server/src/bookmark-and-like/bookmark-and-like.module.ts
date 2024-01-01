import { Module } from '@nestjs/common';
import { BookmarkAndLikeService } from './bookmark-and-like.service';
import { BookmarkAndLikeController } from './bookmark-and-like.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bookmark, bookmarkSchema } from './schemas/bookmark.schema';
import { Like, likeMoviesSchema } from './schemas/like.schema';
import { MoviesModule } from 'src/movies/movies.module';

@Module({
   imports: [
      MongooseModule.forFeature([
         { name: Bookmark.name, schema: bookmarkSchema },
         { name: Like.name, schema: likeMoviesSchema },
      ]),
      MoviesModule,
   ],
   providers: [BookmarkAndLikeService],
   controllers: [BookmarkAndLikeController],
})
export class BookmarkAndLikeModule {}
