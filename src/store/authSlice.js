import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticaded: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticaded = true;
      console.log("i am loggedin");
    },
    logout(state) {
      state.isAuthenticaded = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
