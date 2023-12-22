import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tagTypesObject = {
   getAllMovies: 'getAllMovies',
};

export const movies = createApi({
   reducerPath: 'movies',
   baseQuery: fetchBaseQuery({
      baseUrl: process.env.MOVIES_BASE_URL,
   }),
   tagTypes: [...Object.keys(tagTypesObject)],
   endpoints: () => ({}),
});
