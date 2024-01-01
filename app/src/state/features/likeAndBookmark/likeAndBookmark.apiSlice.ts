import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
   GetLikedMoviesPayload,
   GetLikedMoviesResponse,
   LikeMovieInterface,
   LikeMoviesPayload,
   MovieLikeStatusPayload,
   MovieLikeStatusResponse,
} from '.';

const tagTypesObject = {
   addToLike: 'addToLike',
   movieLikeStatus: 'movieLikeStatus',
   getLikedMoviesTag: 'getLikedMoviesTag',
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
      getLikedMovies: builder.query<Array<GetLikedMoviesResponse>, GetLikedMoviesPayload>({
         query: ({ userId, page }) => ({
            url: `/bookmark-and-like/get-liked-movies?userId=${userId}&page=${page}`,
         }),
         providesTags: [tagTypesObject.getLikedMoviesTag],
      }),
   }),
});

export const { useLikeMoviesMutation, useLazyMovieLikeStatusQuery, useLazyGetLikedMoviesQuery } = likeAndBookmark;
