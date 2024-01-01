import { ApiResponseInterface, PaginationInterface } from '../../../shared/types';
import { GetSingleMovieDetailsInterface } from '../movies';

export interface LikeAndBookmarkResponse {
   movieId: string;
   add: boolean;
}
export interface LikeMoviesPayload {
   userId: string;
   movieId: string;
}
export interface LikeMovieInterface extends ApiResponseInterface, LikeAndBookmarkResponse {}
export interface MovieLikeStatusPayload extends LikeMoviesPayload {}
export interface MovieLikeStatusResponse extends ApiResponseInterface {
   movieId: string;
   liked: boolean;
}
export interface GetLikedMoviesPayload {
   userId: string;
   page?: number;
}
export interface LikedMoviesInterface {
   _id: Types.ObjectId;
   userId: Types.ObjectId;
   likeMovie: GetSingleMovieDetailsInterface;
}
export interface GetLikedMoviesResponse extends PaginationInterface, ApiResponseInterface {
   likedMovies: Array<LikedMoviesInterface>;
}
