import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const itemsSlice = createSlice({
  name: 'items',
  initialState,

  reducers: {
    addItem: (state, { payload }) => {
      return [payload, ...state]
    },
    removeItem: (state, { payload }) => state.filter((i) => i !== payload),
  },
})

export const { addItem, removeItem } = itemsSlice.actions
export default itemsSlice.reducer
