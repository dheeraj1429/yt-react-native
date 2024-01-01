import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MoviesTrailerPayload, MoviesTrailerResponse } from '.';

const tagTypes = {
   getMovieTrailerTag: 'getMovieTrailerTag',
};

export const moviesTrailerApiSlice = createApi({
   reducerPath: 'moviesTrailer',
   tagTypes: [...Object.keys(tagTypes)],
   baseQuery: fetchBaseQuery({
      baseUrl: process.env.KINOCHECK_TRAILER_API_URL,
   }),
   endpoints: (builder) => ({
      getMovieTrailer: builder.query<MoviesTrailerResponse, MoviesTrailerPayload>({
         query: ({ tmdb_id, categories }) => ({
            url: `?tmdb_id=${tmdb_id}&categories=${categories}`,
         }),
         providesTags: [tagTypes.getMovieTrailerTag],
      }),
   }),
});

export const { useGetMovieTrailerQuery } = moviesTrailerApiSlice;
