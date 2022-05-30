import { configureStore } from '@reduxjs/toolkit'
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


const persistConfig = {
  key: 'root',
  version: 1,
  storage: storage,
}

const persistedReducer = persistReducer(persistConfig, favoriteReducer)

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