import { CityType } from '@src/types'
import { Country } from './types'

const parseCountries = (countries: Country[]): CityType[] => {
  return countries.flatMap((country, i) => {
    if (country.capital) {
      return [
        {
          id: `${i}-${country.population}`,
          name: country.capital[0],
          lat: country?.capitalInfo?.latlng
            ? country?.capitalInfo?.latlng[0]
            : country.latlng[0],
          lon: country?.capitalInfo?.latlng
            ? country?.capitalInfo?.latlng[1]
            : country.latlng[1],
        },
      ]
    } else {
      return []
    }
  })
}

export default parseCountries
