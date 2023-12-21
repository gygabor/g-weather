import { Autocomplete, TextField } from '@mui/material'
import { FC, useState } from 'react'
import { Adornment, AutocompleteIcon } from './styles'

interface Props {
  options: string[]
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const AutocompleteField: FC<Props> = ({ options, onChange }) => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <Autocomplete
        options={options}
        fullWidth={true}
        open={open}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              placeholder="cities"
              variant="standard"
              onChange={onChange}
              onFocus={toggleOpen}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <Adornment onClick={toggleOpen} position="end">
                    <AutocompleteIcon params={params} />
                  </Adornment>
                ),
              }}
            />
          )
        }}
      />
    </>
  )
}

export default AutocompleteField
