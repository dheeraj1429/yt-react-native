import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
   GetLikedMoviesPayload,
   GetLikedMoviesResponse,
   LikeMovieInterface,
   LikeMoviesPayload,
   MovieLikeStatusPayload,
   MovieLikeStatusResponse,
} from '.';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserResponseInterface } from '../auth';

export const likeAndBookmarkTagTypesObject = {
   addToLike: 'addToLike',
   movieLikeStatus: 'movieLikeStatus',
   getLikedMoviesTag: 'getLikedMoviesTag',
};

const getFromAuth = async function (token: 'accessToken' | 'refreshToken'): Promise<string | null> {
   const user = await AsyncStorage.getItem('user');
   if (user) {
      const userObject: UserResponseInterface = JSON.parse(user);
      return userObject.user[token];
   }
   return null;
};

const baseQuery = fetchBaseQuery({
   baseUrl: process.env.BACKEND_URL,
   prepareHeaders: async (headers) => {
      const token = await getFromAuth('accessToken');
      if (token) {
         headers.set('authorization', 'Bearer ' + token);
      }
      return headers;
   },
});

export const likeAndBookmark = createApi({
   reducerPath: 'likeAndBookmark',
   baseQuery: baseQuery,
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
         serializeQueryArgs: ({ endpointName }) => {
            return endpointName;
         },
         forceRefetch: ({ currentArg, previousArg }) => {
            return currentArg !== previousArg;
         },
         merge: (currentCache: GetLikedMoviesResponse, newData: GetLikedMoviesResponse) => {
            if (currentCache) {
               const uniqueNewItems = newData.likedMovies.filter(
                  (newDataItem) =>
                     !currentCache.likedMovies.some((cacheData) => cacheData.likeMovie.id === newDataItem.likeMovie.id),
               );

               return {
                  ...currentCache,
                  page: newData.page,
                  total_pages: newData.total_pages,
                  total_results: newData.total_results,
                  likedMovies: currentCache.likedMovies.concat(uniqueNewItems),
               };
            }
            return newData;
         },
      }),
   }),
});

export const { useLikeMoviesMutation, useLazyMovieLikeStatusQuery, useLazyGetLikedMoviesQuery } = likeAndBookmark;
