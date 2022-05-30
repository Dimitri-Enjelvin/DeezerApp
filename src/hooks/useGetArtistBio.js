import { useState, useEffect, useCallback } from 'react'

import { API_LASTFM_KEY } from '../core/constants'

const axios = require('axios')


export default function useGetArtistBio(name) {

    const [info, setInfo] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const getInfo =  useCallback( async () => {

        const response = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${API_LASTFM_KEY}&format=json`)
        setInfo(response.data.artist.bio.summary)
        setIsLoading(false)
        
    }, [name])

    useEffect(() => {

        getInfo()     

    }, [getInfo])
    

    return { info, isLoading }
}

