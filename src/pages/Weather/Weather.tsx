import { Skeleton } from '@mui/material'
import { OPEN_WEATHER_URL } from '@src/constants/links'
import Clock from '@src/features/Clock'
import WeatherInfo from '@src/features/WeatherInfo'
import { useFetch } from '@src/hooks'
import { WeatherType } from '@src/types'
import { FC } from 'react'
import { useLocation } from 'react-router-dom'

const Weather: FC = () => {
  const { state } = useLocation()
  const { city } = state
  const apiKey = process.env['OPEN_WEATHER_API_KEY']
  const url = `${OPEN_WEATHER_URL}&lat=${city.lat}&lon=${city.lon}&appid=${apiKey}`

  const { data, isLoading, error } = useFetch<WeatherType>(url)

  if (error) {
    console.log(error)
  }

  return (
    <>
      {isLoading || !data ? (
        <>
          <Skeleton variant="rounded" width={80} height={68} />
          <Skeleton variant="rounded" width={352} height={200} />
        </>
      ) : (
        <>
          <Clock
            time={data.current.dt}
            offset={data.timezone_offset}
            city={city.name}
          />
          <WeatherInfo weather={data} />
        </>
      )}
    </>
  )
}

export default Weather
