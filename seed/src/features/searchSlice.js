import { createSlice } from "@reduxjs/toolkit";

// Initial state with an empty query
const initialState = {
  query: "",
};

// Create a slice for managing the search query
const searchSlice = createSlice({
  name: "search", // Slice name
  initialState, // Initial state
  reducers: {
    // Reducer to set the search query
    setQuery(state, action) {
      state.query = action.payload;
    },
  },
});

// Export the action to set the search query
export const { setQuery } = searchSlice.actions;

// Selector to access the search query from the state
export const selectQuery = (state) => state.search.query;

// Export the reducer for the searchSlice
export default searchSlice.reducer;
