import { FC } from 'react'
import { ErrorMessageTypography } from './styles'
import { Box } from '@mui/material'

type Props = {
  message: string
}

const ErrorMessage: FC<Props> = ({ message }) => {
  return (
    <ErrorMessageTypography variant="subtitle1">
      <Box>Something went wrong. Please try again later.</Box>
      <Box>Message: {message}</Box>
    </ErrorMessageTypography>
  )
}

export default ErrorMessage
