import { useState, useEffect } from 'react'
import axios from 'axios'

type Response<T> = {
  data: T | null
  isLoading: boolean
  error: Error | null
}

const useFetch = <T>(url: string): Response<T> => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchData = async () => {
    try {
      const response = await axios.get(url)
      setData(response.data)
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(new Error(err.message))
      } else {
        setError(new Error('An unknown error occurred'))
      }
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    setData(null)
    setError(null)
    fetchData().then(() => setIsLoading(false))
  }, [url])

  return { data, isLoading, error }
}

export default useFetch
