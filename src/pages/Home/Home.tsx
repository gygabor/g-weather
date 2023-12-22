import CustomIconButton from '@src/components/CustomIconButton'
import CityList from '@src/components/CityList'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import routes from '@src/constants/routes'
import { useAppSelector } from '@src/services/store/hooks'

const Home: FC = () => {
  const cities = useAppSelector((state) => state.cities)
  const onClick = (id: number) => {
    console.log(id)
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
