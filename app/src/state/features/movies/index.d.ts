import { PaginationInterface } from '../../../shared/types';

export interface MovieInterface {
   adult: boolean;
   backdrop_path: string;
   genre_ids: Array<number>;
   id: number;
   original_language: string;
   original_title: string;
   overview: string;
   popularity: number;
   poster_path: string;
   release_date: string;
   title: string;
   video: boolean;
   vote_average: string;
   vote_count: number;
}
export interface GetMoviesInterface extends PaginationInterface {
   results: Array<MovieInterface>;
}
export interface GetMovieDiscoverPayload {
   sort_by?: string;
   language?: string;
   page?: number;
   'vote_average.gte'?: number;
   with_genres?: number;
}
export interface ProductionCompaniesInterface {
   id: number;
   logo_path: string;
   name: string;
   origin_country: string;
}
export interface GetSingleMovieDetailsInterface extends MovieInterface {
   production_companies: ProductionCompaniesInterface;
}
export interface GetSingleMovieDetailsPayload {
   movieId: string;
}
