import { configureStore } from "@reduxjs/toolkit";
import { darkModeSlice } from "./slices/DarkModeSlice";

const store = configureStore({
  reducer: {
    darkMode: darkModeSlice.reducer,
  },
});

export default store;
