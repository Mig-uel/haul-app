import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { addItem } from '../items/itemsSlice'
import { setIsLoading } from '../loading/loadingSlice'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://item-lookup-production.up.railway.app/api/',
  }),

  endpoints: (builder) => ({
    getItem: builder.query({
      query: (id) => `${id}`,
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        dispatch(setIsLoading())
        try {
          const { data } = await queryFulfilled
          dispatch(addItem(data))
          dispatch(setIsLoading())
        } catch (error) {
          console.log(error)
        }
      },
    }),
  }),
})

export const { useGetItemQuery, useLazyGetItemQuery } = apiSlice
