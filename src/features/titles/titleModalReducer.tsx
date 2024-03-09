import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Title } from "@Models/title.model";
import { TitleModalState } from "@Models/titleModal.model";

const initialState: TitleModalState = {
  open: false,
  title: {
    title: "",
    description: "",
    programType: "",
    images: {
      ["Poster Art"]: {
        url: "",
        width: 0,
        height: 0,
      },
    },
    releaseYear: 0,
  },
};

export const titleModalSlice = createSlice({
  name: "titleModal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<Title>) => {
      state.open = true;
      state.title = action.payload;
    },
    closeModal: (state) => {
      state.open = false;
      state.title = initialState.title;
    },
  },
});

export const { openModal, closeModal } = titleModalSlice.actions;

export default titleModalSlice.reducer;
