import { FC } from 'react'
import { Autocomplete, TextField, Box } from '@mui/material'
import { Adornment, AutocompleteIcon, SaveButton } from './styles'
import useCityFinder from './useCityFinder'
import ErrorMessage from '@ui/ErrorMessage'
import renderOptions from './renderOptions'

const CityFinder: FC = () => {
  const {
    isOpen,
    value,
    toggleOpen,
    onClick,
    onChange,
    onInputChange,
    error,
    cities,
  } = useCityFinder()

  return (
    <>
      {error ? (
        <ErrorMessage>
          <Box>Something went wrong. Please try again later.</Box>
          <Box>Message: {error.message}</Box>
        </ErrorMessage>
      ) : (
        <>
          <Autocomplete
            options={cities}
            fullWidth
            open={isOpen}
            onChange={onChange}
            onInputChange={onInputChange}
            getOptionLabel={(option) => option.name}
            renderOption={renderOptions}
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  placeholder="Search for a city"
                  variant="standard"
                  size="medium"
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
      )}
      {value && (
        <SaveButton onClick={onClick} color="success">
          Save
        </SaveButton>
      )}
    </>
  )
}

export default CityFinder
