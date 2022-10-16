import { login } from "../auth";
import { createSlice, createAsyncThunk, current  } from "@reduxjs/toolkit";
import {  getVideoById } from '../videos';

export const selectedVideosSlice = createSlice({
  name: "selectedVideoSlice",
  initialState: {
    video: { snippet: {}, statistics: {} },
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVideoById.pending, (state, _action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getVideoById.fulfilled, (state, action) => {
        state.loading = false;
        console.log('videos action', action.payload);
        state.video = action.payload.video;
        console.log(state.video)
        state.error = false;
      })
      .addCase(getVideoById.rejected, (state, action) => {
        console.log("err", action);
        // state.error = action.payload.message;
        // state.loading= false;
      });
  },
});

// export const { signIn, logout } = userSlice.actions;

export default selectedVideosSlice.reducer;
