import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import { setupListeners } from '@reduxjs/toolkit/query'
import favoriteReducer  from './slice/favoriteSlice'
import songReducer from './slice/songSlice'


const persistConfig = {
  key: 'root',
  version: 1,
  storage: storage,
}

const rootReducer = combineReducers({
  favorites : favoriteReducer,
  song : songReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

// setupListeners(store.dispatch)