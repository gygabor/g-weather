import { City } from '@src/types'
import { FC } from 'react'
import { CityName } from './styles'

type Props = {
  cities: City[]
  onClick: (city: City) => void
}

const CityList: FC<Props> = ({ cities, onClick }) => {
  return (
    <>
      {cities.map((city) => (
        <CityName variant="h5" key={city.id} onClick={() => onClick(city)}>
          {city.name}
        </CityName>
      ))}
    </>
  )
}

export default CityList
