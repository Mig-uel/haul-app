import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,

  reducers: {
    addItem: ({ items }, { payload }) => ({ ...items, payload }),
    removeItem: ({ items }, { payload }) =>
      items.filter((i) => i.id !== payload),
  },
})

export const { addItem, removeItem } = itemsSlice.actions
export default itemsSlice.reducer
