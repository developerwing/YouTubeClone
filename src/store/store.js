import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import videosSlice from "./slices/videosSlice";
import selectedVideoSlice from "./slices/selectedVideosSlice";
import relatedVideos from "./slices/relatedVideosSlice";
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        user: userSlice,
        homeVideos: videosSlice,
        selectedVideo: selectedVideoSlice,
        relatedVideos: relatedVideos
    },
    middleware: [
        ...getDefaultMiddleware({
            serializableCheck: false
        }),
    ],
});


export default store;