/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const genreOrCategory = createSlice({
  name: 'genreOrCategory',
  initialState: {
    genreIdOrCategoryName: '',
    page: 1,
    searchQuery: '',
  },
  reducers: { // whenever we have a reducer we have to attach it to the store
    selectGenreOrCategory: (state, action) => {
      state.genreIdOrCategoryName = action.payload;
    },
  },
});

export const { selectGenreOrCategory } = genreOrCategory.actions;
export default genreOrCategory.reducer;