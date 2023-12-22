import { useState, useEffect } from 'react'
import axios from 'axios'

interface Response<T> {
  data: T | null
  isLoading: boolean
  error: Error | null
}

const useFetch = <T>(url: string): Response<T> => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const fetchData = async () => {
    const response = await axios.get(url)
    setData(response.data)
  }

  useEffect(() => {
    setIsLoading(true)
    setData(null)
    setError(null)

    try {
      fetchData()
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(new Error(err.message))
      } else {
        setError(new Error('An unknown error occurred'))
      }
    } finally {
      setIsLoading(false)
    }
  }, [url])

  return { data, isLoading, error }
}

export default useFetch