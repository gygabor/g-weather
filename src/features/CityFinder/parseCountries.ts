import { City } from '@src/types'
import { Country } from './types'

const hasDuplicateCapitals = (
  countries: Country[],
  capital: string,
  index: number,
): boolean => {
  return countries.some((c, i) =>
    c.capital ? c.capital[0] === capital && i !== index : false,
  )
}

const parseCountries = (countries: Country[], storedCities: City[]): City[] => {
  const storedCityIds = storedCities.map((city) => city.id)

  return countries.flatMap((country, index) => {
    const { capital, cca2, capitalInfo, latlng, population } = country

    if (capital && !storedCityIds.includes(`${index}-${population}`)) {
      const [lat, lon] = capitalInfo?.latlng || latlng

      return [
        {
          id: `${index}-${country.population}`,
          name: hasDuplicateCapitals(countries, capital[0], index)
            ? `${capital[0]} (${cca2})`
            : capital[0],
          lat,
          lon,
        },
      ]
    } else {
      return []
    }
  })
}

export default parseCountries
