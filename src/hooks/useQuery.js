import { useState, useEffect } from 'react'
import { API_URL } from "../core/constants"

const DZ = window.DZ;

export default function useQuery() {

    const [query, setQuery] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [tracks, setTracks] = useState({})
    const [error, setError] = useState("")

    const getSearchTracksByQuery = () => {

        if(query === "") return

        try {
            DZ.api(`/search/track?q=${query}&limit=10`, async (response) => {
                const data = await response
                setTracks(data)
                setIsLoading(false)
            })
        }
        catch (error) {
            setError(error)
        }

        

    }    

    useEffect(() => {

        getSearchTracksByQuery()

    }, [query])
    

    return { query, setQuery, tracks, isLoading, error }
}