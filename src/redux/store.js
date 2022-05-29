import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { setupListeners } from '@reduxjs/toolkit/query'
import { favoriteSlice }  from './slice/favoriteSlice'

const reducers = combineReducers({
  favorites: favoriteSlice.reducer,
})

export const store = configureStore({
  reducer: reducers,

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(favoriteSlice.reducer.middleware),
})

setupListeners(store.dispatch)