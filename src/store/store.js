import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from './items/itemsSlice.js'

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
})
