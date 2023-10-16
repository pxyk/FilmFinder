import { configureStore } from '@reduxjs/toolkit';
import popularMoviesReducer from '@/features/popularSlice';
import searchReducer from '@/features/searchSlice';

export const store = configureStore({
  reducer: {
    popularMovies: popularMoviesReducer,
    search: searchReducer,
    // Add other reducers if you have them
  },
});