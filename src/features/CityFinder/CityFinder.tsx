import { FC } from 'react'
import { Autocomplete, TextField } from '@mui/material'
import { Adornment, AutocompleteIcon, SaveButton } from './styles'
import useCityFinder from './useCityFinder'
import ErrorMessage from '@src/components/ErrorMessage'

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
    renderOptions,
  } = useCityFinder()

  return (
    <>
      {error ? (
        <ErrorMessage message={error.message} />
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
            noOptionsText="No cities found"
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
                  InputLabelProps={{
                    className: '',
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
