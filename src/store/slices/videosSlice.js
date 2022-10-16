import { login } from "../auth";
import { createSlice, createAsyncThunk, current  } from "@reduxjs/toolkit";
import {  getPopularVideos, getVideosByCategory } from '../videos';

export const videosSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: 'All'
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPopularVideos.pending, (state, _action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPopularVideos.fulfilled, (state, action) => {
        state.loading = false;
        console.log('videos action', action.payload);
        state.videos = state.activeCategory === action.payload.category ? [...state.videos, ...action.payload.videos] : action.payload.videos;
        state.nextPageToken = action.payload.nextPageToken;
        console.log('videos state', current(state));
        state.activeCategory = action.payload.category;
        state.error = false;
      })
      .addCase(getPopularVideos.rejected, (state, action) => {
        console.log("err", action);
        // state.error = action.payload.message;
        // state.loading= false;
      });


      builder
      .addCase(getVideosByCategory.pending, (state, _action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getVideosByCategory.fulfilled, (state, action) => {
        state.loading = false;
        console.log('videos action', action);
        state.videos = action.payload.videos;
        state.nextPageToken = action.payload.nextPageToken;
        state.activeCategory = action.payload.category;
        state.error = false;
      })
      .addCase(getVideosByCategory.rejected, (state, action) => {
        console.log("err", action);
        // state.error = action.payload.message;
        // state.loading= false;
      });
  },
});

// export const { signIn, logout } = userSlice.actions;

export default videosSlice.reducer;
