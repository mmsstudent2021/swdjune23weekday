import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducer/counter.slice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
