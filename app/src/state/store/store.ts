import { configureStore } from '@reduxjs/toolkit';
import { moviesApiSlice } from '../features/movies/movies.apiSlice';
import { authApiSlice } from '../features/auth/auth.apiSlice';
import { likeAndBookmark } from '../features/likeAndBookmark/likeAndBookmark.apiSlice';
import { moviesTrailerApiSlice } from '../features/moviesTrailer/moviesTrailer.apiSlice';
import { playListApiSlice } from '../features/playList/playList.apiSlice';

import { authSlice } from '../features/auth/auth.slice';

import { rtkQueryErrorLogger } from '../middlewares/errorLogger';

export const store = configureStore({
   reducer: {
      [moviesApiSlice.reducerPath]: moviesApiSlice.reducer,
      [authApiSlice.reducerPath]: authApiSlice.reducer,
      [likeAndBookmark.reducerPath]: likeAndBookmark.reducer,
      [moviesTrailerApiSlice.reducerPath]: moviesTrailerApiSlice.reducer,
      [playListApiSlice.reducerPath]: playListApiSlice.reducer,

      [authSlice.name]: authSlice.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
         .concat(moviesApiSlice.middleware)
         .concat(authApiSlice.middleware)
         .concat(likeAndBookmark.middleware)
         .concat(moviesTrailerApiSlice.middleware)
         .concat(playListApiSlice.middleware)
         .concat(rtkQueryErrorLogger),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
