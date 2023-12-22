import { FC, useMemo } from 'react'
import AutocompleteField from '@src/components/AutocompleteField'
import { useFetch } from '@src/hooks'
import { COUNTRIES_URL } from '@src/constants/links'
import { City } from '@src/types'
import { useAppDispatch } from '@src/services/store'
import { saveCity } from './citiesSlice'
import routes from '@src/constants/routes'
import { useNavigate } from 'react-router-dom'
import { Country } from './types'
import parseCounties from './parseCounties'

const CityFinder: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { data } = useFetch<Country[]>(COUNTRIES_URL)

  const cities: City[] = useMemo(() => {
    if (data) {
      return parseCounties(data)
    } else {
      return []
    }
  }, [data])

  const onClick = (value: City) => {
    dispatch(saveCity(value))
    navigate(routes.ROOT)
  }

  return (
    <>
      <AutocompleteField options={cities} onClick={onClick} />
    </>
  )
}

export default CityFinder
