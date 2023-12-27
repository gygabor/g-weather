import { FC } from 'react'
import {
  WeatherLightningRainy,
  WeatherRainy,
  WeatherPouring,
  Snowflake,
  WeatherFog,
  WeatherCloudy,
} from 'mdi-material-ui'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import { IconBox } from './styles'

type Props = {
  id: number
}

const getIcon = (id: number): JSX.Element | null => {
  if (id >= 200 && id < 300) {
    return <WeatherLightningRainy />
  } else if ((id >= 300 && id < 400) || (id >= 520 && id < 600)) {
    return <WeatherRainy />
  } else if (id >= 500 && id < 504) {
    return <WeatherPouring />
  } else if ((id >= 600 && id < 700) || id === 511) {
    return <Snowflake />
  } else if (id >= 700 && id < 800) {
    return <WeatherFog />
  } else if (id === 800) {
    return <LightModeOutlinedIcon />
  } else if (id >= 801 && id < 900) {
    return <WeatherCloudy />
  } else {
    return null
  }
}

const WeatherIcons: FC<Props> = ({ id }) => {
  return <IconBox>{getIcon(id)}</IconBox>
}

export default WeatherIcons
