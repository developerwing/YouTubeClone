import { login } from "../auth";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    userInfo: JSON.parse(sessionStorage.getItem('ytc-user')) || null,
    auth: { accessToken: sessionStorage.getItem('ytc-access-token') || null },
    error: null,
    success: false,
  },
  reducers: {
    signIn: (state, action) => {
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, _action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload.user;
        state.auth = { accessToken: action.payload.accessToken };
        state.error = false;
      })
      .addCase(login.rejected, (state, action) => {
        console.log("err", action);
        // state.error = action.payload.message;
        // state.loading= false;
      });
  },
});

// export const { signIn, logout } = userSlice.actions;

export default userSlice.reducer;
