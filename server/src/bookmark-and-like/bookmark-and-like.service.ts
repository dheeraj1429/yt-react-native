import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { GetSingleMovieDetailsInterface } from 'src/movies';
import { MoviesService } from 'src/movies/movies.service';
import {
   BookmarkMoviesResponse,
   FindUserLikedMoviesInterface,
   GetLikedMoviesResponse,
   LikeMoviesResponse,
   MovieLikeStatusResponse,
} from '.';
import { BookmarkDto, GetLikedMoviesDto, LikeDto, MovieLikeStatusDto } from './dtos/bookmaker.dto';
import { Bookmark } from './schemas/bookmark.schema';
import { Like } from './schemas/like.schema';

@Injectable()
export class BookmarkAndLikeService {
   constructor(
      @InjectModel(Bookmark.name) private readonly bookmarkModel: Model<Bookmark>,
      @InjectModel(Like.name) private readonly likeModel: Model<Like>,
      private readonly movieService: MoviesService,
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

   joinMovieArray(arrayOne: Array<any>, arrayTwo: Array<any>) {
      const arrayTwoMap = new Map();
      arrayTwo.forEach((item) => {
         const commonField = item.id;
         arrayTwoMap.set(commonField, item);
      });

      const joinedArray = arrayOne.map((item) => {
         const commonField = item?.likeMovie?.movieId;
         const matchingItem = arrayTwoMap.get(Number(commonField));
         return { ...item, likeMovie: matchingItem };
      });

      return joinedArray;
   }

   async getLikedMovies(query: GetLikedMoviesDto): Promise<GetLikedMoviesResponse> {
      const { userId, page } = query;
      const documentLimit = 10;

      try {
         const documentCount = await this.likeModel.aggregate([
            { $match: { userId: new Types.ObjectId(userId) } },
            { $project: { count: { $size: '$likedMovies' } } },
         ]);

         const documentCountData = documentCount?.[0];
         if (!documentCountData || documentCountData?.count <= 0)
            return { success: true, error: false, likedMovies: [] };

         const findUserLikedMovies: Array<FindUserLikedMoviesInterface> = await this.likeModel.aggregate([
            { $match: { userId: new Types.ObjectId(userId) } },
            { $unwind: { path: '$likedMovies', preserveNullAndEmptyArrays: true } },
            { $sort: { 'likedMovies.createdAt': -1 } },
            { $project: { _id: 1, userId: 1, likeMovie: '$likedMovies' } },
            { $skip: (Number(page) - 1) * documentLimit },
            { $limit: documentLimit },
         ]);

         if (!findUserLikedMovies) throw new NotFoundException('User liked movies not found!');
         if (!findUserLikedMovies.length) return { success: true, error: false, likedMovies: [] };
         const moviesList: Array<GetSingleMovieDetailsInterface> = [];

         for (let movie of findUserLikedMovies) {
            const {
               likeMovie: { movieId },
            } = movie;
            const data = await this.movieService.getMovieDetails({ movieId: Number(movieId) });
            moviesList.push(data);
         }

         const data = this.joinMovieArray(findUserLikedMovies, moviesList);
         if (!data) return { success: true, error: false, likedMovies: [] };
         return {
            success: true,
            error: false,
            likedMovies: data,
            page: Number(page),
            total_pages: Math.ceil(documentCountData?.count / documentLimit),
            total_results: documentCountData?.count,
         };
      } catch (err) {
         console.log(err);
         throw new InternalServerErrorException(err?.message);
      }
   }
}
