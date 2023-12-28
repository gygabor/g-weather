import styled from '@emotion/styled'
import { Typography, Box, Container } from '@mui/material'

export const CustomTypography = styled(Typography)(() => ({
  lineHeight: '1',
}))

export const ClockBox = styled(Box)(() => ({
  width: '100%',
  height: '96px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'column',
}))

export const ClockContainer = styled(Container)(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
}))
