import CustomIconButton from '@src/components/CustomIconButton'
import CityList from '@src/components/CityList'
import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import routes from '@src/constants/routes'
import { useAppSelector } from '@src/services/store/hooks'
import { CityType } from '@src/types'

const Home: FC = () => {
  const navigate = useNavigate()

  const cities = useAppSelector((state) => state.cities)
  const onClick = (city: CityType) => {
    navigate(routes.WEATHER, { state: { city } })
  }

  return (
    <>
      <CityList onClick={onClick} cities={cities} />
      <Link to={routes.CITIES}>
        <CustomIconButton iconType="add" color="success" size="large" />
      </Link>
    </>
  )
}

export default Home
