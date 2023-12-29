import { ApiResponseInterface } from 'src/shared/types';

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
