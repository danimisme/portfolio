import { createSlice } from "@reduxjs/toolkit";

const localTheme = localStorage.getItem("darkMode");

const initialState = {
  darkMode: localTheme === "false" ? false : true,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      localStorage.setItem("darkMode", !state.darkMode);
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
