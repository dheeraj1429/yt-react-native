import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Bookmark } from './schemas/bookmark.schema';
import { Model, Types } from 'mongoose';
import { BookmarkDto, LikeDto, MovieLikeStatusDto } from './dtos/bookmaker.dto';
import { BookmarkMoviesResponse, LikeMoviesResponse, MovieLikeStatusResponse } from '.';
import { Like } from './schemas/like.schema';

@Injectable()
export class BookmarkAndLikeService {
   constructor(
      @InjectModel(Bookmark.name) private readonly bookmarkModel: Model<Bookmark>,
      @InjectModel(Like.name) private readonly likeModel: Model<Like>,
   ) {}

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
            return { add: true, movieId, success: true, message: 'Movie added in bookmark', error: false };
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
            return {
               add: false,
               movieId,
               success: true,
               error: false,
               message: 'Movie removed successfully from bookmark',
            };
         }
         throw new InternalServerErrorException();
      } else {
         const bookmarkedMovie = await this.bookmarkModel.updateOne(
            { userId: userObjectId },
            { $push: { bookmarkMovies: { movieId } } },
         );
         if (bookmarkedMovie.modifiedCount) {
            return { add: true, movieId, success: true, error: false, message: 'Movie added successfully' };
         }
         throw new InternalServerErrorException();
      }
   }

   async movieLikeStatus(query: MovieLikeStatusDto): Promise<MovieLikeStatusResponse> {
      const { userId, movieId } = query;
      const userObjectId = new Types.ObjectId(userId);
      const isUserAlreadyExists = await this.likeModel.findOne({ userId: userObjectId }, { userId: 1 });

      if (!isUserAlreadyExists) return { success: true, error: false, movieId, liked: false };
      const checkMovieAlreadyLiked = await this.likeModel.findOne(
         { userId: userObjectId, likedMovies: { $elemMatch: { movieId } } },
         { 'likedMovies.$': 1 },
      );
      if (checkMovieAlreadyLiked) return { success: true, error: false, movieId, liked: true };
      return { success: true, error: false, movieId, liked: false };
   }

   async likeMovies(body: LikeDto): Promise<LikeMoviesResponse> {
      const { movieId, userId } = body;
      const userObjectId = new Types.ObjectId(userId);
      const isUserAlreadyExists = await this.likeModel.findOne({ userId: userObjectId }, { userId: 1 });
      if (!isUserAlreadyExists) {
         const addNewUserIntoLikeDocument = await new this.likeModel({
            userId: userObjectId,
            likedMovies: [{ movieId }],
         }).save();

         if (addNewUserIntoLikeDocument) {
            return { add: true, movieId, success: true, message: 'Movie added in like document', error: false };
         }
         throw new InternalServerErrorException();
      }

      const checkMovieAlreadyLiked = await this.likeModel.findOne(
         { userId: userObjectId, likedMovies: { $elemMatch: { movieId } } },
         { 'likedMovies.$': 1 },
      );

      if (checkMovieAlreadyLiked) {
         const removeMovieFromLikeDocument = await this.likeModel.updateOne(
            { userId: userObjectId, likedMovies: { $elemMatch: { movieId } } },
            { $pull: { likedMovies: { movieId } } },
         );
         if (removeMovieFromLikeDocument.modifiedCount) {
            return {
               add: false,
               movieId,
               success: true,
               error: false,
               message: 'Movie removed successfully from like document',
            };
         }
         throw new InternalServerErrorException();
      } else {
         const likedMovie = await this.likeModel.updateOne(
            { userId: userObjectId },
            { $push: { likedMovies: { movieId } } },
         );
         if (likedMovie.modifiedCount) {
            return { add: true, movieId, success: true, error: false, message: 'Movie added successfully' };
         }
         throw new InternalServerErrorException();
      }
   }
}
