import { login } from "../auth";
import { createSlice, createAsyncThunk, current  } from "@reduxjs/toolkit";
import {  getRelatedVideos } from '../videos';

export const relatedVideos = createSlice({
  name: "relatedVideos",
  initialState: {
    videos: [],
    relatedVideosLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRelatedVideos.pending, (state, _action) => {
        state.relatedVideosLoading = true;
        state.error = null;
      })
      .addCase(getRelatedVideos.fulfilled, (state, action) => {
        state.relatedVideosLoading = false;
        console.log('videos action', action.payload);
        state.videos = action.payload.videos;
        console.log(state.video)
        state.error = false;
      })
      .addCase(getRelatedVideos.rejected, (state, action) => {
        console.log("err", action);
        // state.error = action.payload.message;
        // state.relatedVideosLoading= false;
      });
  },
});

// export const { signIn, logout } = userSlice.actions;

export default relatedVideos.reducer;
