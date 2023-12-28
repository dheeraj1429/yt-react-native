import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Bookmark } from './schemas/bookmark.schema';
import { Model, Types } from 'mongoose';
import { BookmarkDto } from './dtos/bookmaker.dto';
import { BookmarkMoviesResponse } from '.';

@Injectable()
export class BookmarkAndLikeService {
   constructor(@InjectModel(Bookmark.name) private readonly bookmarkModel: Model<Bookmark>) {}

   async bookmarkMovies(body: BookmarkDto): Promise<BookmarkMoviesResponse> {
      const { userId, movieId } = body;
      const userObjectId = new Types.ObjectId(userId);
      const isUserAlreadyExists = await this.bookmarkModel.findOne({ userId: userObjectId }, { userId: 1 });

      if (!isUserAlreadyExists) {
         const addNewUserIntoBookmark = await new this.bookmarkModel({
            userId: userObjectId,
            bookmarkMovies: [{ movieId }],
         }).save();

         if (addNewUserIntoBookmark) {
            return { movieId, success: true, message: 'Movie added in bookmark', error: false };
         }
         throw new InternalServerErrorException();
      }

      const checkMovieAlreadyBookmarked = await this.bookmarkModel.findOne(
         { userId: userObjectId, bookmarkMovies: { $elemMatch: { movieId } } },
         { 'bookmarkMovies.$': 1 },
      );

      if (checkMovieAlreadyBookmarked) {
         const removeMovieFromBookmarked = await this.bookmarkModel.updateOne(
            { userId: userObjectId, bookmarkMovies: { $elemMatch: { movieId } } },
            { $pull: { bookmarkMovies: { movieId } } },
         );
         if (removeMovieFromBookmarked.modifiedCount) {
            return { movieId, success: true, error: false, message: 'Movie removed successfully from bookmark' };
         }
         throw new InternalServerErrorException();
      } else {
         const addMovieFromBookmarked = await this.bookmarkModel.updateOne(
            { userId: userObjectId },
            { $push: { bookmarkMovies: { movieId } } },
         );
         if (addMovieFromBookmarked.modifiedCount) {
            return { movieId, success: true, error: false, message: 'Movie added successfully' };
         }
         throw new InternalServerErrorException();
      }
   }
}
