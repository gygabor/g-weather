import { Autocomplete, TextField } from '@mui/material'
import React, { FC, SyntheticEvent, useState } from 'react'
import { Adornment, AutocompleteIcon } from './styles'

interface City {
  name: string
  latitude: number
  longitude: number
  country: string
  population: number
  is_capital: boolean
}

interface Props {
  options: City[]
  onChange: (
    event: SyntheticEvent<Element, Event>,
    newValue: string | null,
  ) => void
  value: City | null
  setInputValue: React.Dispatch<React.SetStateAction<string>>
}

const AutocompleteField: FC<Props> = ({
  options,
  onChange,
  value,
  setInputValue,
}) => {
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
        value={value}
        filterOptions={(x) => x}
        autoComplete
        getOptionLabel={(option) =>
          typeof option === 'string' ? option : option.name
        }
        includeInputInList
        onInputChange={(event, newInputValue) => {
          console.log({ newInputValue })
          setInputValue(newInputValue)
        }}
        onChange={onChange}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              placeholder="cities"
              variant="standard"
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
