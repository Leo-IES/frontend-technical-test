import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Title } from "@Models/title.model";

interface TitleState {
  entries: Title[];
}

const initialState: TitleState = {
  entries: [],
};

export const titleSlice = createSlice({
  name: "title",
  initialState,
  reducers: {
    assignTitles: (state, action: PayloadAction<Title[]>) => {
      state.entries = [];
      state.entries.push(...action.payload);
    },
  },
});

export const { assignTitles } = titleSlice.actions;


export default titleSlice.reducer;
