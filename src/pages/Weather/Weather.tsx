import { Skeleton } from '@mui/material'
import { OPEN_WEATHER_URL } from '@src/constants/links'
import Clock from '@src/features/Clock'
import { useFetch } from '@src/hooks'
import { FC, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

const Weather: FC = () => {
  const { state } = useLocation()
  const apiKey = process.env['OPEN_WEATHER_API_KEY']
  const url = `${OPEN_WEATHER_URL}&lat=${state.city.lat}&lon=${state.city.lon}&appid=${apiKey}`

  const { data, isLoading, error } = useFetch(url)

  if (error) {
    console.log(error)
  }

  const weather = useMemo(() => {
    if (data) {
      return data
    } else {
      return {}
    }
  }, [data])

  return (
    <>
      {isLoading || !weather.current ? (
        <Skeleton variant="rectangular" width={210} height={118} />
      ) : (
        <Clock time={weather.current.dt} offset={weather.timezone_offset} />
      )}
    </>
  )
}

export default Weather
