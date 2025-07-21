// lib/redux/darkModeSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DarkModeState {
  darkMode: boolean;
}

const initialState: DarkModeState = {
  darkMode: true, // default value; actual value will be synced on client
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
    toggleDarkMode: (state) => {
      const newMode = !state.darkMode;
      state.darkMode = newMode;
      if (typeof window !== "undefined") {
        localStorage.setItem("darkMode", JSON.stringify(newMode));
      }
    },
  },
});

export const { setDarkMode, toggleDarkMode } = darkModeSlice.actions;
