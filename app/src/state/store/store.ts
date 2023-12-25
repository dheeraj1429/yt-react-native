import { configureStore } from '@reduxjs/toolkit';
import { moviesApiSlice } from '../features/movies/movies.apiSlice';
import { authApiSlice } from '../features/auth/auth.apiSlice';

export const store = configureStore({
   reducer: {
      [moviesApiSlice.reducerPath]: moviesApiSlice.reducer,
      [authApiSlice.reducerPath]: authApiSlice.reducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApiSlice.middleware).concat(authApiSlice.middleware),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
