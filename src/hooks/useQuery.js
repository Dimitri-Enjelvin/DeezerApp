import { useState, useEffect } from 'react'
import { API_URL } from "../core/constants"

const DZ = window.DZ;

export default function useQuery() {

    const [query, setQuery] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState({
        albums: [],
        tracks: [],
        artist: [],
    })




    // const getSearchByQuery = () => {

    //     DZ.api(`/search/${type}?q=${query}&limit=3`, async (response) => {
    //         const data = await response    
    //         type === 'albums' ? setData({ albums: data })
    //         :
    //         setIsLoading(false)
    //         })
    
    // }


    const getSearchAlbumsByQuery = () => {


        try {
            DZ.api(`/search/album?q=${query}&limit=3`, async (response) => {
                const data = await response
                setData({albums: data});
            });
            
        }
        catch (error) {
            setError(error)
        }

        setIsLoading(false)

    }

    const getSearchArtistsByQuery = () => {

        try {
            DZ.api(`/search/artist?q=${query}&limit=3`, async (response) => {
                const data = await response
                setData({artists: data});
            })
        }
        catch (error) {
            setError(error)
        }

        setIsLoading(false)

    }

    const getSearchTracksByQuery = () => {


        try {
            DZ.api(`/search/track?q=${query}&limit=3`, async (response) => {
                const data = await response
                setData({tracks: data});
            })
        }
        catch (error) {
            setError(error)
        }

        setIsLoading(false)

    }    
    
    const func = {
        getSearchAlbumsByQuery,
        getSearchArtistsByQuery,
        getSearchTracksByQuery
    }


    return { func, query, setQuery, data, isLoading, error }
}