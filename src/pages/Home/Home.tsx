import CustomIconButton from '@src/components/CustomIconButton'
import CityList from '@src/features/CityList'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const Home: FC = () => {
  return (
    <>
      <CityList />
      <Link to="/cities">
        <CustomIconButton iconType="add" color="success" size="large" />
      </Link>
    </>
  )
}

export default Home
