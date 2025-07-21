import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  project: {},
};

export const projectModalSlice = createSlice({
  name: "projectModal",
  initialState,
  reducers: {
    openProjectModal: (state, action) => {
      state.isOpen = true;
      state.project = action.payload;
    },
    closeProjectModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openProjectModal, closeProjectModal } =
  projectModalSlice.actions;
export default projectModalSlice.reducer;
