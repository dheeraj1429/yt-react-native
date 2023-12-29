import { ApiResponseInterface } from 'src/shared/types';

export interface BookmarkMoviesResponse extends ApiResponseInterface {
   movieId: string;
}
export interface LikeMoviesResponse extends ApiResponseInterface {
   movieId: string;
}
