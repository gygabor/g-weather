import { City } from '@src/types'
import { OptionTypography } from './styles'
import { Typography } from '@mui/material'
import { ReactNode } from 'react'

export type InputValue = {
  inputValue: string
}

const renderOptions = (
  props: React.HTMLAttributes<HTMLLIElement>,
  option: City,
  { inputValue }: InputValue,
): ReactNode => {
  const lowerCaseName = option.name.toLowerCase()
  const lowerCaseInputValue = inputValue.toLowerCase()
  const start = lowerCaseName.indexOf(lowerCaseInputValue)

  if (inputValue === '' || start === -1) {
    return (
      <li {...props} key={option.id}>
        <OptionTypography variant="h6">{option.name}</OptionTypography>
      </li>
    )
  }

  const end = start + inputValue.length
  const before = option.name.slice(0, start)
  const highlighted = option.name.slice(start, end)
  const after = option.name.slice(end)

  return (
    <li {...props} key={option.id}>
      <OptionTypography variant="h6">
        {before.replace(/ /g, '\u00A0')}
      </OptionTypography>
      <Typography variant="h6">
        {highlighted.replace(/ /g, '\u00A0')}
      </Typography>
      <OptionTypography variant="h6">
        {after.replace(/ /g, '\u00A0')}
      </OptionTypography>
    </li>
  )
}

export default renderOptions
