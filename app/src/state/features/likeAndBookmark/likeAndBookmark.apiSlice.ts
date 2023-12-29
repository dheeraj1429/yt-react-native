import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LikeMovieInterface, LikeMoviesPayload } from '.';

const tagTypesObject = {
   addToLike: 'addToLike',
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
   }),
});

export const { useLikeMoviesMutation } = likeAndBookmark;
