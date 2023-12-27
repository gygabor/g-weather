import { WeatherType } from '@src/types'
import { FC } from 'react'
import Description from './Description'

type Props = {
  weather: WeatherType
}

const WeatherInfo: FC<Props> = ({ weather }) => {
  console.log(weather)
  const { current } = weather
  return (
    <>
      <Description
        description={current.weather[0].description}
        id={current.weather[0].id}
      />
    </>
  )
}

export default WeatherInfo
