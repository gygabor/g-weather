import { FC } from 'react'
import { ClockBox, ClockContainer, CustomTypography } from './styles'
import { Skeleton, Typography } from '@mui/material'
import useClock from './useClock'

type Props = {
  offset: number
  city: string
}

const Clock: FC<Props> = ({ offset, city }) => {
  const { hours, minutes } = useClock(offset)

  return (
    <ClockContainer>
      <ClockBox>
        {hours ? (
          <CustomTypography variant="h3" color="secondary">
            {hours}
          </CustomTypography>
        ) : (
          <Skeleton variant="rounded" width={53} height={46} />
        )}
        {minutes ? (
          <CustomTypography variant="h3" color="secondary">
            {minutes}
          </CustomTypography>
        ) : (
          <Skeleton variant="rounded" width={53} height={46} />
        )}
      </ClockBox>
      <Typography variant="h4">{city}</Typography>
    </ClockContainer>
  )
}

export default Clock
