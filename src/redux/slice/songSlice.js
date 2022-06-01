import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  songPlaying : null,
}

export const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {

    updateSongPlaying: (state, action) => {
        state.songPlaying = state.songPlaying === action.payload ? null : action.payload
    },
  },
})

export const { 
    updateSongPlaying
 } = songSlice.actions

export default songSlice.reducer