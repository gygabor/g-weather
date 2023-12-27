import { FC } from 'react'
import WeatherIcons from '@src/components/WeatherIcons'
import { Typography } from '@mui/material'

type Props = {
  description: string
  id: number
}

const Description: FC<Props> = ({ description, id }) => {
  return (
    <>
      <WeatherIcons id={id} />
      <Typography variant="body1">{description}</Typography>
    </>
  )
}

export default Description
