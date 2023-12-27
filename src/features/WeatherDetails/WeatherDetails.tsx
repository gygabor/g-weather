import { WeatherType } from '@src/types'
import { FC } from 'react'
import Description from './Description'
import Info from './Info'

type Props = {
  weather: WeatherType
}

const WeatherDetails: FC<Props> = ({ weather }) => {
  const { current } = weather
  return (
    <>
      <Description
        description={current.weather[0].description}
        id={current.weather[0].id}
      />
      <Info
        offset={weather.timezone_offset}
        temp={current.temp}
        sunrise={current.sunrise}
        sunset={current.sunset}
      />
    </>
  )
}

export default WeatherDetails
