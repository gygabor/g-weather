import { FC } from 'react'
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined'
import { WeatherSunsetUp, WeatherSunsetDown } from 'mdi-material-ui'
import { InfoBox, WeatherContainer, WeatherText } from './styles'

type Props = {
  temp: number
  sunrise: number
  sunset: number
  offset: number
}

const Info: FC<Props> = ({ temp, sunrise, sunset, offset }) => {
  const sunriseDate = new Date((sunrise + offset) * 1000)
  const sunriseTime = `${sunriseDate.getUTCHours()}:${sunriseDate.getUTCMinutes()}`

  const sunsetDate = new Date((sunset + offset) * 1000)
  const sunsetTime = `${sunsetDate.getUTCHours()}:${sunsetDate.getUTCMinutes()}`
  const temperature = Math.round(temp)
  return (
    <WeatherContainer>
      <InfoBox>
        <ThermostatOutlinedIcon />
        <WeatherText variant="subtitle1">{temperature} °C</WeatherText>
      </InfoBox>
      <InfoBox>
        <WeatherSunsetUp />
        <WeatherText variant="subtitle1">{sunriseTime}</WeatherText>
      </InfoBox>
      <InfoBox>
        <WeatherSunsetDown />
        <WeatherText variant="subtitle1">{sunsetTime}</WeatherText>
      </InfoBox>
    </WeatherContainer>
  )
}

export default Info
