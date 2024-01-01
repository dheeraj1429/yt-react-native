import { configureStore } from '@reduxjs/toolkit';
import { moviesApiSlice } from '../features/movies/movies.apiSlice';
import { authApiSlice } from '../features/auth/auth.apiSlice';
import { likeAndBookmark } from '../features/likeAndBookmark/likeAndBookmark.apiSlice';
import { moviesTrailerApiSlice } from '../features/moviesTrailer/moviesTrailer.apiSlice';

export const store = configureStore({
   reducer: {
      [moviesApiSlice.reducerPath]: moviesApiSlice.reducer,
      [authApiSlice.reducerPath]: authApiSlice.reducer,
      [likeAndBookmark.reducerPath]: likeAndBookmark.reducer,
      [moviesTrailerApiSlice.reducerPath]: moviesTrailerApiSlice.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
         .concat(moviesApiSlice.middleware)
         .concat(authApiSlice.middleware)
         .concat(likeAndBookmark.middleware)
         .concat(moviesTrailerApiSlice.middleware),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
