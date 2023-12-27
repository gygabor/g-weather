import { CityType } from '@src/types'
import { FC } from 'react'
import { CityName } from './styles'

interface Props {
  cities: CityType[]
  onClick: (city: CityType) => void
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
