
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from './store'

const API_KEY = 'efef'

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState)
      if (token) {
        headers.set('authorization', `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWZmYzBhN2JjYWJlNGU4YjE2ZmJmMjhiZTVlOTEzNSIsInN1YiI6IjY1ZTVkYmJjNDRhNDI0MDE2MzExOTNjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.71IJjhDckhoJGdKnwsVVE7GlSi2QXtQ2usshX1wnRYc`)
      }

      return headers
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<MovieList,void>({
      query: () => `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
    }),
    getMovieById: builder.query<Movie,number>({
      query: postId => `movie/${postId}?api_key=0effc0a7bcabe4e8b16fbf28be5e9135`
    })
  }),

})


export const { useGetMoviesQuery } = movieApi
export const { useGetMovieByIdQuery } = movieApi

export type Movie = {
  id: number,
  original_title: string,
  release_date: string,
  tagline: string,
  budget: number,
  overview: string,
  popularity: number,
  backdrop_path: string
}

type MovieList ={
  results: Movie[]
}
