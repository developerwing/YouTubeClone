import request from './api';
const { createAsyncThunk } = require("@reduxjs/toolkit");

export const getPopularVideos = createAsyncThunk('/getPopularVideos', async (_, { fulfillWithValue, rejectWithValue, getState  }) => {
    try {
        const { data } = await request('/videos', {
           params: {
              part: 'snippet,contentDetails,statistics',
              chart: 'mostPopular',
              regionCode: 'IN',
              maxResults: 20,
              pageToken: getState().homeVideos.nextPageToken
           },
        })
   
        console.log('getPopularVideos', getState().homeVideos.nextPageToken);
        return {videos: data.items, nextPageToken: data.nextPageToken , category: 'All'}
     } catch (error) {
        console.log(error.message)
     }
  });


  export const getVideosByCategory  = createAsyncThunk('/getVideosByCategory ', async (keyword , { fulfillWithValue, rejectWithValue, getState }) => {
    try {
        const { data } = await request('/search', {
            params: {
               part: 'snippet',
   
               maxResults: 20,
               pageToken: getState().homeVideos.nextPageToken,
               q: keyword,
               type: 'video'
            },
         })
         console.log('getVideosByCategory', getState().homeVideos.nextPageToken);
        return {videos: data.items, nextPageToken: data.nextPageToken, category: keyword }
     } catch (error) {
        console.log(error.message)
     }
  });


  export const getVideoById  = createAsyncThunk('/getVideoById ', async (id , { fulfillWithValue, rejectWithValue, getState }) => {
   try {
      const { data } = await request('/videos', {
         params: {
            part: 'snippet,statistics',
            id: id,
         },
      })

       return { video: data.items[0]};
    } catch (error) {
       console.log(error.message)
    }
 });

 
 export const getRelatedVideos  = createAsyncThunk('/getRelatedVideos ', async (id , { fulfillWithValue, rejectWithValue, getState }) => {
   try {
      const { data } = await request('/search', {
         params: {
            part: 'snippet',
            relatedToVideoId: id,
            maxResults: 15,
            type: 'video',
         },
      })
       return {videos: data.items }
    } catch (error) {
       console.log(error.message)
    }
 });