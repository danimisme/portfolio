import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: sessionStorage.getItem("darkMode") === "true",
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      sessionStorage.setItem("darkMode", !state.darkMode);
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
