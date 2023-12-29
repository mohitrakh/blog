import { createSlice } from "@reduxjs/toolkit";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
} from "../utils/localStorage";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: getUserFromLocalStorage(),
    loading: false,
    error: null,
  },
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      addUserToLocalStorage(action.payload);
    },
    signInFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { signInStart, signInSuccess, signInFailed } = userSlice.actions;

export default userSlice.reducer;
