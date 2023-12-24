import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PaginationPayloadInterface } from '../../../shared/types';
import { addApiKeyWithRequest } from '../../../utils/helper';
import { GetMovieDiscoverPayload, GetMoviesInterface } from '.';

const tagTypesAr = {
   getMovies: 'getMovies',
   topRatedMovies: 'topRatedMovies',
   getUpComingMovies: 'getUpComingMovies',
   getMovieDiscover: 'getMovieDiscover',
};

const baseQueryWithAuth = fetchBaseQuery({
   baseUrl: process.env.MOVIES_BASE_URL,
   prepareHeaders: headers => {
      headers.set('Authorization', process.env.API_ACCESS_TOKEN!);
      return headers;
   },
});

export const movies = createApi({
   reducerPath: 'movies',
   baseQuery: baseQueryWithAuth,
   tagTypes: [...Object.keys(tagTypesAr)],
   endpoints: builder => ({
      getPopularMovies: builder.query<GetMoviesInterface, PaginationPayloadInterface>({
         query: ({ page }) => ({
            url: addApiKeyWithRequest(`/movie/popular`, { page }),
         }),
         providesTags: [tagTypesAr.getMovies],
      }),
      getTopRatedMovies: builder.query<GetMoviesInterface, PaginationPayloadInterface>({
         query: ({ page }) => ({
            url: addApiKeyWithRequest(`/movie/top_rated`, { page }),
            providesTags: [tagTypesAr.topRatedMovies],
         }),
      }),
      getUpcomingMovies: builder.query<GetMoviesInterface, PaginationPayloadInterface>({
         query: ({ page }) => ({
            url: addApiKeyWithRequest(`/movie/upcoming`, { page }),
            providesTags: [tagTypesAr.getUpComingMovies],
         }),
      }),
      getMovieDiscover: builder.query<GetMoviesInterface, GetMovieDiscoverPayload>({
         query: args => ({
            url: addApiKeyWithRequest(`/discover/movie`, args),
            providesTags: [tagTypesAr.getMovieDiscover],
         }),
      }),
   }),
});

export const { useGetPopularMoviesQuery, useGetTopRatedMoviesQuery, useGetUpcomingMoviesQuery, useGetMovieDiscoverQuery } = movies;
