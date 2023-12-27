import styled from '@emotion/styled'
import { Box, Container, Typography } from '@mui/material'

export const InfoBox = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  '& svg': {
    color: theme.palette.text.disabled,
    marginRight: '16px',
  },
}))

export const WeatherText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}))

export const WeatherContainer = styled(Container)(() => ({
  width: 'fit-content',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '16px',
}))
