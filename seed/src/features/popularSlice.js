import { createSlice } from "@reduxjs/toolkit";
import { fetchPopularMovies } from "@/api/main/popularapi";

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setMovies, setLoading, setError } = popularMoviesSlice.actions;

export const fetchPopularMoviesAsync = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const data = await fetchPopularMovies();
    dispatch(setMovies(data.results));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const selectPopularMovies = (state) => state.popularMovies;
export default popularMoviesSlice.reducer;
