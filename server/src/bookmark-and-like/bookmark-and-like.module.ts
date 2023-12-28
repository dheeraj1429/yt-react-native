import { Module } from '@nestjs/common';
import { BookmarkAndLikeService } from './bookmark-and-like.service';
import { BookmarkAndLikeController } from './bookmark-and-like.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bookmark, bookmarkSchema } from './schemas/bookmark.schema';

@Module({
   imports: [MongooseModule.forFeature([{ name: Bookmark.name, schema: bookmarkSchema }])],
   providers: [BookmarkAndLikeService],
   controllers: [BookmarkAndLikeController],
})
export class BookmarkAndLikeModule {}
