
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY= 'efef'

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => `movie/157336?api_key=0effc0a7bcabe4e8b16fbf28be5e9135`
    }),
  }),
})


export const { useGetMoviesQuery } = movieApi

type Movie = {
  id: number,
  title: string
}