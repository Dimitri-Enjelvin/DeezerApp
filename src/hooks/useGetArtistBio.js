import { useState, useEffect } from 'react'
// import axios from 'axios'

const axios = require('axios')

// const API_KEY = "c79fda7d07f1ce0aeb5c94271ee06afb"

export default function useGetArtistBio(name) {

    const [info, setInfo] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const getInfo = async () => {

        const response = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=c79fda7d07f1ce0aeb5c94271ee06afb&format=json`)
        setInfo(response.data.artist.bio.summary)
        setIsLoading(false)
    }

    useEffect(() => {
        getInfo()      
    }, [])
    

    return { info, isLoading }
}

