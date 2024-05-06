import { configureStore } from "@reduxjs/toolkit";
import { darkModeSlice } from "./slices/DarkModeSlice";

const state = configureStore({
  reducer: {
    darkMode: darkModeSlice.reducer,
  },
});

export default state;
