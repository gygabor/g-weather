import { FC, useMemo } from 'react'
import AutocompleteField from '@src/components/AutocompleteField'
import { useFetch } from '@src/hooks'
import { COUNTRIES_URL } from '@src/constants/links'
import { CityType } from '@src/types'
import { useAppDispatch } from '@src/services/store'
import { saveCity } from './citiesSlice'
import routes from '@src/constants/routes'
import { useNavigate } from 'react-router-dom'
import { Country } from './types'
import parseCountries from './parseCountries'

const CityFinder: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { data } = useFetch<Country[]>(COUNTRIES_URL)

  const cities: CityType[] = useMemo(() => {
    if (data) {
      return parseCountries(data)
    } else {
      return []
    }
  }, [data])

  const onClick = (city: CityType) => {
    dispatch(saveCity(city))
    navigate(routes.ROOT)
  }

  return (
    <>
      <AutocompleteField options={cities} onClick={onClick} />
    </>
  )
}

export default CityFinder
