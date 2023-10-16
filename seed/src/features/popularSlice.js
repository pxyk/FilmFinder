import { createSlice } from "@reduxjs/toolkit";
import { fetchPopularMovies } from "@/api/main/popularapi";

// Create a slice for managing popular movies
const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Reducer to set movies and reset loading and error
    setMovies: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
      state.error = null;
    },
    // Reducer to set loading state
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    // Reducer to set error and reset loading
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// Export actions to be used in the application
export const { setMovies, setLoading, setError } = popularMoviesSlice.actions;

// Async action to fetch popular movies and update the state accordingly
export const fetchPopularMoviesAsync = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const data = await fetchPopularMovies();
    dispatch(setMovies(data.results));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// Selectors to access the state in components
export const selectPopularMovies = (state) => state.popularMovies;

// Export the reducer for the popularMovies slice
export default popularMoviesSlice.reducer;
