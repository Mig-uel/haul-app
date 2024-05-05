import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from './items/itemsSlice.js'
import haulsReducer from './hauls/haulsSlice.js'
import loadingReducer from './loading/loadingSlice.js'
import { apiSlice } from './api/apiSlice.js'

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    hauls: haulsReducer,
    loading: loadingReducer,
    // [api]
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
