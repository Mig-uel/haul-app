import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const haulsSlice = createSlice({
  name: 'hauls',
  initialState,

  reducers: {
    addHaul: (state, { payload }) => {
      return [payload, ...state]
    },
  },
})

export const { addHaul } = haulsSlice.actions
export default haulsSlice.reducer
