import { Autocomplete, TextField } from '@mui/material'
import { FC, SyntheticEvent, useState } from 'react'
import { Adornment, AutocompleteIcon, SaveButton } from './styles'
import { City } from '@src/types'

interface Props {
  options: City[]
  onClick: (value: City) => void
}

const AutocompleteField: FC<Props> = ({ options, onClick }) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<City | null>(null)

  const toggleOpen = () => {
    setOpen(!open)
  }

  const handleClick = () => {
    if (value) {
      onClick(value)
    }
  }

  const onChange = (e: SyntheticEvent, val: City | null) => {
    toggleOpen()
    setValue(val)
  }

  const onInputChange = (e: SyntheticEvent, val: string) => {
    if (!val) {
      setValue(null)
    }
  }

  const renderOption = (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: City,
  ) => {
    return (
      <li {...props} key={option.id}>
        {option.name}
      </li>
    )
  }

  return (
    <>
      <Autocomplete
        options={options}
        fullWidth={true}
        open={open}
        onChange={onChange}
        onInputChange={onInputChange}
        getOptionLabel={(option) => option.name}
        renderOption={renderOption}
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
      {value && (
        <SaveButton onClick={handleClick} color="success">
          Save
        </SaveButton>
      )}
    </>
  )
}

export default AutocompleteField
