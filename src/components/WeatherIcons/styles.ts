import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const IconBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& svg': {
    fontSize: '8rem',
    color: theme.palette.text.secondary,
  },
}))
