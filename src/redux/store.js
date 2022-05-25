import { configureStore, combineReducers } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { deezerApi } from '../api'
import { favoriteSlice }  from './slice/favoriteSlice'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [deezerApi.reducerPath]: deezerApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(deezerApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)