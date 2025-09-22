import { configureStore } from "@reduxjs/toolkit";
import { darkModeSlice } from "./slices/DarkModeSlice";
import { projectModalSlice } from "./slices/ProjectModalSlice";
import { loadingSlice } from "./slices/LoadingSlice";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    darkMode: darkModeSlice.reducer,
    projectModal: projectModalSlice.reducer,
    loading: loadingSlice.reducer,
  },
});

export default store;
