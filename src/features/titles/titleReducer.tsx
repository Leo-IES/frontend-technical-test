import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Title } from "@Models/title.model";

interface TitleState {
  loading: boolean;
  error: boolean;
  entries: Title[];
  entriesBackUp: Title[];
}

const initialState: TitleState = {
  loading: false,
  error: false,
  entries: [],
  entriesBackUp: [],
};

export const titleSlice = createSlice({
  name: "title",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
    assignTitles: (state, action: PayloadAction<Title[] | undefined>) => {
      state.entries = [];
      state.entriesBackUp = [];
      state.entries.push(...action.payload!);
      state.entriesBackUp.push(...action.payload!);
    },
    filterByYearTitles: (state, action: PayloadAction<number>) => {
      const year = action.payload;
      if (year < 2010 || year > 2024) {
        return;
      }
      state.entries = state.entriesBackUp
      state.entries = state.entries.filter(
        (title: Title) => title.releaseYear == action.payload
      );
    },
    cleanFilterByYearTitles: (state) => {
      state.entries = state.entriesBackUp;
    },
  },
});

export const {
  setLoading,
  setError,
  assignTitles,
  filterByYearTitles,
  cleanFilterByYearTitles,
} = titleSlice.actions;

export default titleSlice.reducer;
