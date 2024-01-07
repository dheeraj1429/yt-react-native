import { Types } from 'mongoose';
import { GetSingleMovieDetailsInterface } from 'src/movies';
import { ApiResponseInterface, PaginationInterface } from 'src/shared/types';

export interface likeAndBookmarkResponse {
   movieId: string;
   add: boolean;
}
export interface BookmarkMoviesResponse extends ApiResponseInterface, likeAndBookmarkResponse {}
export interface LikeMoviesResponse extends ApiResponseInterface, likeAndBookmarkResponse {}
export interface MovieLikeStatusResponse extends ApiResponseInterface {
   movieId: string;
   liked: boolean;
}
export interface FindUserLikedMoviesInterface {
   _id: Types.ObjectId;
   userId: Types.ObjectId;
   likeMovie: { movieId: string; _id: Types.ObjectId; createdAt: Date };
   createdAt: Date;
}
export interface GetLikedMoviesResponse extends PaginationInterface, ApiResponseInterface {
   likedMovies: Array<{
      _id: Types.ObjectId;
      userId: Types.ObjectId;
      likeMovie: GetSingleMovieDetailsInterface;
   }>;
}
export interface CreatePlaylistResponse extends ApiResponseInterface {}
export interface DeletePlaylistResponse extends ApiResponseInterface {}
export interface StoreMovieInPlaylistResponse extends ApiResponseInterface {
   add: boolean;
}
