import { configureStore } from "@reduxjs/toolkit";
import titleReducer from "@Features/titles/titleReducer";
import titleModalReducer from "@Features/titles/titleModalReducer";

const store = configureStore({
  reducer: {
    title: titleReducer,
    titleModal: titleModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
