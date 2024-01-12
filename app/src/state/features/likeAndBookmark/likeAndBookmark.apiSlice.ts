import { createApi } from '@reduxjs/toolkit/query/react';
import {
   GetLikedMoviesPayload,
   GetLikedMoviesResponse,
   LikeMovieInterface,
   LikeMoviesPayload,
   MovieLikeStatusPayload,
   MovieLikeStatusResponse,
} from '.';
import { baseQueryWithToken } from '../../../utils/helper';

export const likeAndBookmarkTagTypesObject = {
   addToLike: 'addToLike',
   movieLikeStatus: 'movieLikeStatus',
   getLikedMoviesTag: 'getLikedMoviesTag',
};

export const likeAndBookmark = createApi({
   reducerPath: 'likeAndBookmark',
   baseQuery: baseQueryWithToken(process.env.BACKEND_URL!),
   tagTypes: [...Object.keys(likeAndBookmarkTagTypesObject)],
   endpoints: (builder) => ({
      likeMovies: builder.mutation<LikeMovieInterface, LikeMoviesPayload>({
         query: (body) => ({
            url: '/bookmark-and-like/add-remove-like',
            method: 'POST',
            body,
         }),
         onQueryStarted: async ({ userId, movieId }, { dispatch, queryFulfilled }) => {
            try {
               const queryResponse = await queryFulfilled;
               if (queryResponse?.data && !queryResponse.data?.add) {
                  dispatch(
                     likeAndBookmark.util.updateQueryData('getLikedMovies', { userId }, (draft) => {
                        return {
                           ...draft,
                           likedMovies: draft.likedMovies.filter(
                              (item) => item.likeMovie.id.toString() !== movieId.toString(),
                           ),
                        };
                     }),
                  );
               }
            } catch (err) {
               console.log(err);
            }
         },
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
         providesTags: (resultValue) =>
            resultValue?.likedMovies.length
               ? [
                    { type: likeAndBookmarkTagTypesObject.getLikedMoviesTag, id: 'userLikedMoviesId' },
                    ...resultValue.likedMovies.map((item) => ({
                       type: likeAndBookmarkTagTypesObject.getLikedMoviesTag,
                       id: item.likeMovie.id,
                    })),
                 ]
               : [likeAndBookmarkTagTypesObject.getLikedMoviesTag],
         serializeQueryArgs: ({ endpointName }) => endpointName,
         forceRefetch: ({ currentArg, previousArg }) => currentArg?.page !== previousArg?.page,
         merge: (currentCache: GetLikedMoviesResponse, newData: GetLikedMoviesResponse) => {
            if (currentCache && !!newData?.page && newData.page > 1) {
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
