import styled from '@emotion/styled'
import { Typography } from '@mui/material'

export const ErrorMessageTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
}))
