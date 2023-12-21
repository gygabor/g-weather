import { Autocomplete, AutocompleteProps, TextField } from '@mui/material'
import { FC, useState } from 'react'
import { Adornment, AutocompleteIcon } from './styles'

interface Props extends AutocompleteProps<string, boolean, boolean, boolean> {
  options: string[]
}

const AutocompleteField: FC<Props> = ({ options, ...props }) => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }

  return (
    <>
      <Autocomplete
        {...props}
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
