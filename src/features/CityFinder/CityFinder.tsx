import { FC, useMemo } from 'react'
import AutocompleteField from '@src/components/AutocompleteField'
import { useFetch } from '@src/hooks'
import { COUNTRIES_URL } from '@src/constants/links'
import { City } from '@src/types'
import { useAppDispatch } from '@src/services/store/hooks'
import { saveCity } from './citiesSlice'
import routes from '@src/constants/routes'
import { useNavigate } from 'react-router-dom'

interface Country {
  capital: string[]
  capitalInfo: {
    latlng: number[]
  }
  latlng: number[]
  population: number
}

const CityFinder: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { data } = useFetch<Country[]>(COUNTRIES_URL)

  const cities: City[] = useMemo(() => {
    if (data) {
      return data.flatMap((country, i) => {
        if (country.capital) {
          return [
            {
              id: `${i}-${country.population}`,
              name: country.capital[0],
              lat: country?.capitalInfo?.latlng
                ? country?.capitalInfo?.latlng[0]
                : country.latlng[0],
              lng: country?.capitalInfo?.latlng
                ? country?.capitalInfo?.latlng[0]
                : country.latlng[1],
            },
          ]
        } else {
          return []
        }
      })
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
