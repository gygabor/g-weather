import CustomIconButton from '@src/components/CustomIconButton'
import CityList from '@src/components/CityList'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import routes from '@src/constants/routes'
import { useAppSelector } from '@src/services/store/hooks'
import { City } from '@src/types'

const Home: FC = () => {
  const navigate = useNavigate()

  const cities = useAppSelector((state) => state.cities)
  const onCityClick = (city: City) => {
    navigate(routes.WEATHER, { state: { city } })
  }

  const onAddButtonClick = () => {
    navigate(routes.CITIES)
  }

  return (
    <>
      <CityList onClick={onCityClick} cities={cities} />
      <CustomIconButton
        onClick={onAddButtonClick}
        iconType="add"
        color="success"
        size="large"
      />
    </>
  )
}

export default Home
