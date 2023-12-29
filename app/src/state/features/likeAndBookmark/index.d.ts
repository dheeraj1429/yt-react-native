import { ApiResponseInterface } from '../../../shared/types';

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
