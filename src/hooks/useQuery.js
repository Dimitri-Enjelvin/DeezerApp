import { useState, useEffect, useCallback } from 'react'

const DZ = window.DZ;

export default function useQuery() {

    const [query, setQuery] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [tracks, setTracks] = useState({})
    const [error, setError] = useState("")

    const getSearchTracksByQuery = useCallback(() => {

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

    }, [query])    

    useEffect(() => {

        getSearchTracksByQuery()

    }, [query, getSearchTracksByQuery])
    

    return { query, setQuery, tracks, isLoading, error }
}