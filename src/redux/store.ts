import { configureStore } from "@reduxjs/toolkit";
import { darkModeSlice } from "./slices/DarkModeSlice";
import { projectModalSlice } from "./slices/ProjectModalSlice";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    darkMode: darkModeSlice.reducer,
    projectModal: projectModalSlice.reducer,
  },
});

export default store;
