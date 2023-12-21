import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Autocomplete, InputAdornment, TextField } from '@mui/material'
import { FC } from 'react'
import {
  Adornment,
  AutocompleteIcon,
} from '../../components/AutocompleteField/styles'
import AutocompleteField from '@src/components/AutocompleteField'

const options = [
  'Budapest',
  'London',
  'New York',
  'Berlin',
  'Paris',
  'Rome',
  'Madrid',
  'Vienna',
  'Prague',
  'Amsterdam',
  'Brussels',
]

const CityFinder: FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }

  return (
    <>
      <AutocompleteField options={options} onChange={onChange} />
    </>
  )
}

export default CityFinder
