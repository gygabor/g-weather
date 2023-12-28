import { Skeleton } from '@mui/material'
import { OPEN_WEATHER_URL } from '@src/constants/links'
import Clock from '@src/components/Clock'
import WeatherDetails from '@src/features/WeatherDetails'
import { useFetch } from '@src/hooks'
import { WeatherInfo } from '@src/types'
import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import ErrorMessage from '@src/components/ui/ErrorMessage'

const Weather: FC = () => {
  const { state } = useLocation()
  const { city } = state
  const apiKey = process.env['OPEN_WEATHER_API_KEY']
  const url = `${OPEN_WEATHER_URL}&lat=${city.lat}&lon=${city.lon}&appid=${apiKey}`

  const { data, isLoading, error } = useFetch<WeatherInfo>(url)

  return (
    <>
      {error ? (
        <ErrorMessage message={error.message} />
      ) : (
        <>
          {isLoading || !data ? (
            <>
              <Skeleton variant="rounded" width={80} height={68} />
              <Skeleton variant="rounded" width={'100%'} height={200} />
            </>
          ) : (
            <>
              <Clock offset={data.timezone_offset} city={city.name} />
              <WeatherDetails weather={data} />
            </>
          )}
        </>
      )}
    </>
  )
}

export default Weather
