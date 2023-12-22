import { configureStore } from '@reduxjs/toolkit';
import { movies } from '../features/movies/movies.apiSlice';

export const store = configureStore({
   reducer: {
      [movies.reducerPath]: movies.reducer,
   },
   middleware: getDefaultMiddleware => getDefaultMiddleware().concat(movies.middleware),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
