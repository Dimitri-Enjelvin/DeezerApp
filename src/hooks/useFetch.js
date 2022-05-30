import { useState, useEffect, useCallback } from 'react'

const DZ = window.DZ;


export default function useFetch(url) {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState({})
    const [error, setError] = useState("")


    const fetchData = useCallback(() => {

      try {
        DZ.api(`${url}`, async (response) => {
          const data = await response    
          setData(data)  
          setIsLoading(false)
        })
      }
      catch (error) {
        setError(error)
      }
        

  }, [url])

  useEffect(() => {
    
    fetchData()

  }, [fetchData])  



    return { isLoading, data, error }
}