import { configureStore } from '@reduxjs/toolkit';
import { moviesApiSlice } from '../features/movies/movies.apiSlice';
import { authApiSlice } from '../features/auth/auth.apiSlice';
import { likeAndBookmark } from '../features/likeAndBookmark/likeAndBookmark.apiSlice';

export const store = configureStore({
   reducer: {
      [moviesApiSlice.reducerPath]: moviesApiSlice.reducer,
      [authApiSlice.reducerPath]: authApiSlice.reducer,
      [likeAndBookmark.reducerPath]: likeAndBookmark.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
         .concat(moviesApiSlice.middleware)
         .concat(authApiSlice.middleware)
         .concat(likeAndBookmark.middleware),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
