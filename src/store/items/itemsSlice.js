import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const itemsSlice = createSlice({
  name: 'items',
  initialState,

  reducers: {
    addItem: (state, { payload }) => [payload, ...state],

    removeItem: (state, { payload }) => {
      const filteredArray = state.filter((i) => i.id !== payload)
      return filteredArray
    },
  },
})

export const { addItem, removeItem } = itemsSlice.actions
export default itemsSlice.reducer
