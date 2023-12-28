import { SyntheticEvent, useMemo, useState } from 'react'
import { useFetch } from '@src/hooks'
import { COUNTRIES_URL } from '@src/constants/links'
import { CityType } from '@src/types'
import { useAppDispatch, useAppSelector } from '@src/services/store'
import { saveCity } from './citiesSlice'
import routes from '@src/constants/routes'
import { useNavigate } from 'react-router-dom'
import { Country } from './types'
import parseCountries from './parseCountries'

type ReturnProps = {
  cities: CityType[]
  isOpen: boolean
  value: CityType | null
  toggleOpen: () => void
  onClick: () => void
  onChange: (_: SyntheticEvent, value: CityType | null) => void
  onInputChange: (_: SyntheticEvent, value: string) => void
  error: Error | null
}

const useCityFinder = (): ReturnProps => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState<CityType | null>(null)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const storedCities = useAppSelector((state) => state.cities)
  const { data, error } = useFetch<Country[]>(COUNTRIES_URL)

  const cities: CityType[] = useMemo(() => {
    if (data) {
      return parseCountries(data, storedCities)
    } else {
      return []
    }
  }, [data, storedCities])

  const onClick = () => {
    dispatch(saveCity(value))
    navigate(routes.ROOT)
  }

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const onChange = (_: SyntheticEvent, value: CityType | null) => {
    toggleOpen()
    setValue(value)
  }

  const onInputChange = (_: SyntheticEvent, value: string) => {
    if (!value) {
      setValue(null)
    } else if (value && !isOpen) {
      toggleOpen()
    }
  }

  return {
    cities,
    isOpen,
    value,
    toggleOpen,
    onClick,
    onChange,
    onInputChange,
    error,
  }
}

export default useCityFinder
