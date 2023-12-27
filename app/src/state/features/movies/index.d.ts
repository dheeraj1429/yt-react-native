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
   budget: number;
   belongs_to_collection: {
      id: number;
      name: string;
      poster_path: string;
      backdrop_path: string;
   };
   homepage: string;
   imdb_id: string;
   revenue: number;
   runtime: number;
   spoken_languages: Array<{ english_name: string; iso_639_1: string; name: string }>;
   status: string;
   tagline: string;
   title: string;
   video: boolean;
   genres: Array<{ id: number; name: string }>;
}
export interface GetSingleMovieDetailsPayload {
   movieId: string;
}
