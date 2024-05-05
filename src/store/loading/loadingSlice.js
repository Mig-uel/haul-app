import { createSlice } from '@reduxjs/toolkit'

const initialState = false

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,

  reducers: {
    setIsLoading: (state) => !state,
  },
})

export const { setIsLoading } = loadingSlice.actions
export default loadingSlice.reducer
