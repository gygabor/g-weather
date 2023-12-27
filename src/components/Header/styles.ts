import styled from '@emotion/styled'
import { Container } from '@mui/material'
import CustomIconButton from '../CustomIconButton'

export const HeaderContainer = styled(Container)(() => ({
  width: '100%',
  height: '80px',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  paddingLeft: '0px',
  paddingRight: '0px',
  position: 'relative',
}))

export const HeaderIcon = styled(CustomIconButton)(() => ({
  position: 'absolute',
  top: '0',
  left: '-10px',
}))
