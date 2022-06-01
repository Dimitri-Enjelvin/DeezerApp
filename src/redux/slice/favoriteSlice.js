import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favSongs : [],
  favArtists : [],
  favAlbums : [],
}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {

    addFavoriteSong: (state, action) => {
        state.favSongs = [...state.favSongs, action.payload]
    },
    removeFavoriteSong: (state, action) => {
        state.favSongs = [...state.favSongs.filter((song) => song.id !== action.payload)]
    },

    addFavoriteArtist: (state, action) => {
        state.favArtists = [...state.favArtists, action.payload]
    },
    removeFavoriteArtist: (state, action) => {
        state.favArtists = [...state.favArtists.filter((artist) => artist.id !== action.payload)]
    },

    addFavoriteAlbum: (state, action) => {
      state.favAlbums = [...state.favAlbums, action.payload]
    },
    removeFavoriteAlbum: (state, action) => {
        state.favAlbums = [...state.favAlbums.filter((album) => album.id !== action.payload)]
    }
    
  },
})

export const { 
    addFavoriteArtist,
    addFavoriteSong, 
    addFavoriteAlbum,
    removeFavoriteArtist, 
    removeFavoriteSong,
    removeFavoriteAlbum
 } = favoriteSlice.actions

export default favoriteSlice.reducer