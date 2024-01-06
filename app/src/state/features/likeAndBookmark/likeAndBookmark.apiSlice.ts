import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
   GetLikedMoviesPayload,
   GetLikedMoviesResponse,
   LikeMovieInterface,
   LikeMoviesPayload,
   MovieLikeStatusPayload,
   MovieLikeStatusResponse,
} from '.';

export const likeAndBookmarkTagTypesObject = {
   addToLike: 'addToLike',
   movieLikeStatus: 'movieLikeStatus',
   getLikedMoviesTag: 'getLikedMoviesTag',
};

export const likeAndBookmark = createApi({
   reducerPath: 'likeAndBookmark',
   baseQuery: fetchBaseQuery({
      baseUrl: process.env.BACKEND_URL,
   }),
   tagTypes: [...Object.keys(likeAndBookmarkTagTypesObject)],
   endpoints: (builder) => ({
      likeMovies: builder.mutation<LikeMovieInterface, LikeMoviesPayload>({
         query: (body) => ({
            url: '/bookmark-and-like/add-remove-like',
            method: 'POST',
            body,
         }),
         invalidatesTags: [likeAndBookmarkTagTypesObject.getLikedMoviesTag],
      }),
      movieLikeStatus: builder.query<MovieLikeStatusResponse, MovieLikeStatusPayload>({
         query: ({ userId, movieId }) => ({
            url: `/bookmark-and-like/movie-like-status?userId=${userId}&movieId=${movieId}`,
         }),
         providesTags: [likeAndBookmarkTagTypesObject.movieLikeStatus],
      }),
      getLikedMovies: builder.query<GetLikedMoviesResponse, GetLikedMoviesPayload>({
         query: ({ userId, page }) => ({
            url: `/bookmark-and-like/get-liked-movies?userId=${userId}&page=${page}`,
         }),
         providesTags: [likeAndBookmarkTagTypesObject.getLikedMoviesTag],
         serializeQueryArgs: ({ queryArgs }) => {
            const newQueryArgs = { ...queryArgs };
            if (newQueryArgs.page) {
               delete newQueryArgs.page;
            }
            return newQueryArgs;
         },
         // merge: (currentCache: GetLikedMoviesResponse, newData: GetLikedMoviesResponse) => {
         //    if (currentCache) {
         //       const uniqueNewItems = newData.likedMovies.filter(
         //          (newDataItem) =>
         //             !currentCache.likedMovies.some((cacheData) => cacheData.likeMovie.id === newDataItem.likeMovie.id),
         //       );

         //       return {
         //          ...currentCache,
         //          page: newData.page,
         //          total_pages: newData.total_pages,
         //          total_results: newData.total_results,
         //          likedMovies: currentCache.likedMovies.concat(uniqueNewItems),
         //       };
         //    }
         //    return newData;
         // },
      }),
   }),
});

export const { useLikeMoviesMutation, useLazyMovieLikeStatusQuery, useLazyGetLikedMoviesQuery } = likeAndBookmark;
