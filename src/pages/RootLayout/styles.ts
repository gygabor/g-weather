import styled from '@emotion/styled'
import { Container } from '@mui/material'

export const RootContainer = styled(Container)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}))

export const ContentContainer = styled(Container)(() => ({
  width: '400px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'column',
}))
