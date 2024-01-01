import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MoviesTrailerPayload, MoviesTrailerResponse } from '.';

export const moviesTrailerTagTypes = {
   getMovieTrailerTag: 'getMovieTrailerTag',
};

export const moviesTrailerApiSlice = createApi({
   reducerPath: 'moviesTrailer',
   tagTypes: [...Object.keys(moviesTrailerTagTypes)],
   baseQuery: fetchBaseQuery({
      baseUrl: process.env.KINOCHECK_TRAILER_API_URL,
   }),
   endpoints: (builder) => ({
      getMovieTrailer: builder.query<MoviesTrailerResponse, MoviesTrailerPayload>({
         query: ({ tmdb_id, categories }) => ({
            url: `?tmdb_id=${tmdb_id}&categories=${categories}`,
         }),
         providesTags: [moviesTrailerTagTypes.getMovieTrailerTag],
      }),
   }),
});

export const { useGetMovieTrailerQuery } = moviesTrailerApiSlice;
