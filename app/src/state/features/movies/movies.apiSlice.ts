import { createApi } from '@reduxjs/toolkit/query/react';
import {
   GetMovieDiscoverPayload,
   GetMoviesInterface,
   GetSearchMoviesPayload,
   GetSearchMoviesResponse,
   GetSingleMovieDetailsInterface,
   GetSingleMovieDetailsPayload,
} from '.';
import { PaginationPayloadInterface } from '../../../shared/types';
import { addApiKeyWithRequest, baseQueryWithToken } from '../../../utils/helper';

export const moviesTagTypes = {
   getMovies: 'getMovies',
   topRatedMovies: 'topRatedMovies',
   getUpComingMovies: 'getUpComingMovies',
   getMovieDiscover: 'getMovieDiscover',
   getSingleMovieDetails: 'getSingleMovieDetails',
   getSearchMovies: 'getSearchMovies',
};

export const moviesApiSlice = createApi({
   reducerPath: 'movies',
   baseQuery: baseQueryWithToken(process.env.MOVIES_BASE_URL!),
   tagTypes: [...Object.keys(moviesTagTypes)],
   endpoints: (builder) => ({
      getPopularMovies: builder.query<GetMoviesInterface, PaginationPayloadInterface>({
         query: ({ page }) => ({
            url: addApiKeyWithRequest(`/movie/popular`, { page }),
         }),
         providesTags: [moviesTagTypes.getMovies],
      }),
      getTopRatedMovies: builder.query<GetMoviesInterface, PaginationPayloadInterface>({
         query: ({ page }) => ({
            url: addApiKeyWithRequest(`/movie/top_rated`, { page }),
         }),
         providesTags: [moviesTagTypes.topRatedMovies],
      }),
      getUpcomingMovies: builder.query<GetMoviesInterface, PaginationPayloadInterface>({
         query: ({ page }) => ({
            url: addApiKeyWithRequest(`/movie/upcoming`, { page }),
         }),
         providesTags: [moviesTagTypes.getUpComingMovies],
      }),
      getMovieDiscover: builder.query<GetMoviesInterface, GetMovieDiscoverPayload>({
         query: (args) => ({
            url: addApiKeyWithRequest(`/discover/movie`, args),
         }),
         providesTags: [moviesTagTypes.getMovieDiscover],
      }),
      getSingleMovieDetails: builder.query<GetSingleMovieDetailsInterface, GetSingleMovieDetailsPayload>({
         query: ({ movieId }) => ({
            url: addApiKeyWithRequest(`/movie/${movieId}`),
         }),
         providesTags: [moviesTagTypes.getSingleMovieDetails],
      }),
      searchMovies: builder.query<GetSearchMoviesResponse, GetSearchMoviesPayload>({
         query: ({ search }) => ({
            url: addApiKeyWithRequest(`/search/keyword`, { query: search }),
         }),
         providesTags: [moviesTagTypes.getSearchMovies],
      }),
   }),
});

export const {
   useGetPopularMoviesQuery,
   useGetTopRatedMoviesQuery,
   useGetUpcomingMoviesQuery,
   useGetMovieDiscoverQuery,
   useLazyGetSingleMovieDetailsQuery,
   useLazySearchMoviesQuery,
} = moviesApiSlice;
