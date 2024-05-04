import { createSlice, current } from '@reduxjs/toolkit'

const initialState = []

export const itemsSlice = createSlice({
  name: 'items',
  initialState,

  reducers: {
    addItem: (state, { payload }) => {
      const exists = state.find((item) => item.id === payload)
      return exists
        ? state.map((item) => {
            if (item.id === exists.id) return { ...item, qty: item.qty + 1 }
            else return item
          })
        : [{ id: payload, qty: 1 }, ...state]
    },

    removeItem: (state, { payload }) => {
      const filteredArray = state.filter((i) => i.id !== payload)
      return filteredArray
    },
  },
})

export const { addItem, removeItem } = itemsSlice.actions
export default itemsSlice.reducer
