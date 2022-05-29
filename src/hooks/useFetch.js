import { useState, useEffect } from 'react'

const DZ = window.DZ;


export default function useFetch(url) {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState({})
    const [error, setError] = useState("")


    const fetchData = () => {

        DZ.api(`${url}`, async (response) => {
        const data = await response    
        setData(data)  
        setIsLoading(false)
        })

  }

  useEffect(() => {
    
    fetchData()
    console.log("hhoh")

  }, [])  



    return { isLoading, data }
}