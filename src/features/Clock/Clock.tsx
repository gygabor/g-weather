import { FC, useEffect, useState } from 'react'
import { ClockBox, ClockContainer, CustomTypography } from './styles'
import { Typography } from '@mui/material'

type Props = {
  time: number
  offset: number
  city: string
}

const Clock: FC<Props> = ({ time, offset, city }) => {
  const [hours, setHours] = useState<string | null>(null)
  const [minutes, setMinutes] = useState<string | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date(Date.now() + offset * 1000)
      const h = date.getUTCHours()
      const m = date.getUTCMinutes()

      setHours(h < 10 ? `0${h}` : `${h}`)
      setMinutes(m < 10 ? `0${m}` : `${m}`)
    }, 1000)

    return () => clearInterval(interval)
  }, [time, offset])

  return (
    <ClockContainer>
      <ClockBox>
        <CustomTypography variant="h3" color="secondary">
          {hours}
        </CustomTypography>
        <CustomTypography variant="h3" color="secondary">
          {minutes}
        </CustomTypography>
      </ClockBox>
      <Typography variant="h4">{city}</Typography>
    </ClockContainer>
  )
}

export default Clock
