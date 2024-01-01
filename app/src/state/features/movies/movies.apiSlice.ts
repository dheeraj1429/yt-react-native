import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginationPayloadInterface } from '../../../shared/types';
import { addApiKeyWithRequest } from '../../../utils/helper';
import {
   GetMovieDiscoverPayload,
   GetMoviesInterface,
   GetSingleMovieDetailsInterface,
   GetSingleMovieDetailsPayload,
} from '.';

export const moviesTagTypes = {
   getMovies: 'getMovies',
   topRatedMovies: 'topRatedMovies',
   getUpComingMovies: 'getUpComingMovies',
   getMovieDiscover: 'getMovieDiscover',
   getSingleMovieDetails: 'getSingleMovieDetails',
};

const baseQueryWithAuth = fetchBaseQuery({
   baseUrl: process.env.MOVIES_BASE_URL,
   prepareHeaders: (headers) => {
      headers.set('Authorization', process.env.API_ACCESS_TOKEN!);
      return headers;
   },
});

export const moviesApiSlice = createApi({
   reducerPath: 'movies',
   baseQuery: baseQueryWithAuth,
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
            providesTags: [moviesTagTypes.topRatedMovies],
         }),
      }),
      getUpcomingMovies: builder.query<GetMoviesInterface, PaginationPayloadInterface>({
         query: ({ page }) => ({
            url: addApiKeyWithRequest(`/movie/upcoming`, { page }),
            providesTags: [moviesTagTypes.getUpComingMovies],
         }),
      }),
      getMovieDiscover: builder.query<GetMoviesInterface, GetMovieDiscoverPayload>({
         query: (args) => ({
            url: addApiKeyWithRequest(`/discover/movie`, args),
            providesTags: [moviesTagTypes.getMovieDiscover],
         }),
      }),
      getSingleMovieDetails: builder.query<GetSingleMovieDetailsInterface, GetSingleMovieDetailsPayload>({
         query: ({ movieId }) => ({
            url: addApiKeyWithRequest(`/movie/${movieId}`),
            providesTags: [moviesTagTypes.getSingleMovieDetails],
         }),
      }),
   }),
});

export const {
   useGetPopularMoviesQuery,
   useGetTopRatedMoviesQuery,
   useGetUpcomingMoviesQuery,
   useGetMovieDiscoverQuery,
   useLazyGetSingleMovieDetailsQuery,
} = moviesApiSlice;
