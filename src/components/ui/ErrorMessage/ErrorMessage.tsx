import { FC, ReactNode } from 'react'
import { ErrorMessageTypography } from './styles'

type Props = {
  children: ReactNode
}

const ErrorMessage: FC<Props> = ({ children }) => {
  return (
    <ErrorMessageTypography variant="subtitle1">
      {children}
    </ErrorMessageTypography>
  )
}

export default ErrorMessage
