import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LikeMovieInterface, LikeMoviesPayload, MovieLikeStatusPayload, MovieLikeStatusResponse } from '.';

const tagTypesObject = {
   addToLike: 'addToLike',
   movieLikeStatus: 'movieLikeStatus',
};

export const likeAndBookmark = createApi({
   reducerPath: 'likeAndBookmark',
   baseQuery: fetchBaseQuery({
      baseUrl: process.env.BACKEND_URL,
   }),
   tagTypes: [...Object.keys(tagTypesObject)],
   endpoints: (builder) => ({
      likeMovies: builder.mutation<LikeMovieInterface, LikeMoviesPayload>({
         query: (body) => ({
            url: '/bookmark-and-like/add-remove-like',
            method: 'POST',
            body,
         }),
      }),
      movieLikeStatus: builder.query<MovieLikeStatusResponse, MovieLikeStatusPayload>({
         query: ({ userId, movieId }) => ({
            url: `/bookmark-and-like/movie-like-status?userId=${userId}&movieId=${movieId}`,
         }),
         providesTags: [tagTypesObject.movieLikeStatus],
      }),
   }),
});

export const { useLikeMoviesMutation, useLazyMovieLikeStatusQuery } = likeAndBookmark;
