import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from './items/itemsSlice.js'
import haulsReducer from './hauls/haulsSlice.js'
import { apiSlice } from './api/apiSlice.js'

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    hauls: haulsReducer,
    // [api]
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
