import styled from '@emotion/styled'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  AutocompleteRenderInputParams,
  Button,
  InputAdornment,
} from '@mui/material'

interface AutocompleteTextFieldProps {
  params: AutocompleteRenderInputParams
}

export const Adornment = styled(InputAdornment)(({ theme }) => ({
  position: 'absolute',
  right: '0',
  cursor: 'pointer',
  color: theme.palette.info.main,
}))

export const AutocompleteIcon = styled(
  ExpandMoreIcon,
)<AutocompleteTextFieldProps>(({ params }) => ({
  transform: params.inputProps['aria-expanded']
    ? 'rotate(180deg)'
    : 'rotate(0deg)',
  transition: 'transform 0.3s',
}))

export const SaveButton = styled(Button)(() => ({
  padding: '16px',
}))
