import { ApiResponseInterface } from '../../../shared/types';

export interface LikeMoviesPayload {
   userId: string;
   movieId: string;
}
export interface LikeMovieInterface extends ApiResponseInterface {
   movieId: string;
}
