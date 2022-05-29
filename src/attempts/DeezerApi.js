import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const deezerApi = createApi({
    reducerPath: 'deezerApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.deezer.com/', mode: "cors", 
    // prepareHeaders: (headers) => {
    //   headers.set('Origin', 'http://localhost:3000')
    //   // headers.set('Access-Control-Allow-Headers', '*')
    //   return headers
    // },
  }),
    
    endpoints: (builder) => ({

      getAlbumsByArtist: builder.query({
        query: (id) => `artist/${id}/albums`,
      }),
      getSingleArtist: builder.query({
        query: (id) => `artist/${id}`,
      }),
      getArtistsByGenre: builder.query({
        query: (id) => `genre/${id}/artists`,
      }),
      getArtistsByRelation: builder.query({
        query: (id) => `artist/${id}/related`,
      }),

      
      getChartArtists: builder.query({
        query: () => `chart/artists`,
      }),
      getChartAlbums: builder.query({
        query: () => `chart/albums`,
      }),
      getChartTracks: builder.query({
        query: () => `chart/tracks`,
      }),

      getChart: builder.query({
        query: () => `chart/`,
      }),

      
      getGenres: builder.query({
        query: () => `genre`,
      }),


      getSearchAlbums: builder.query({
        query: (query) => `search/album?q=${query}&limit=3`,
      }),
      getSearchArtists: builder.query({
        query: (query) => `search/artist?q=${query}&limit=3`,
      }),
      getSearchTracks: builder.query({
        query: (query) => `search/track?q=${query}&limit=3`,
      }),


      getSingleAlbum: builder.query({
        query: (id) => `album/${id}`,
      }),
      getSingleRadio: builder.query({
        query: (id) => `radio/${id}/tracks`,
      }),


      getTopArtistTracks: builder.query({
        query: (id) => `artist/${id}/top`,
      }),
      getTopRadios: builder.query({
        query: () => `radio/top`,
      }),

    }),
    
  })
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { 
    useGetAlbumsByArtistQuery,
    useGetArtistsByGenreQuery,
    useGetArtistsByRelationQuery,
    useGetChartArtistsQuery,
    useGetChartAlbumsQuery,
    useGetChartTracksQuery,
    useGetGenresQuery,
    useGetSearchAlbumsQuery,
    useGetSearchArtistsQuery,
    useGetSearchTracksQuery,
    useGetSingleAlbumQuery,
    useGetSingleArtistQuery,
    useGetSingleRadioQuery,
    useGetTopArtistTracksQuery,
    useGetTopRadiosQuery
    } = deezerApi