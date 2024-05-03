import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),

  endpoints: (builder) => ({
    getItem: builder.query({
      query: (id) => `https://us.openfoodfacts.org/api/v0/product/${id}.json`,
    }),
  }),
})

export const { useGetItemQuery } = apiSlice
