import { FC } from 'react'
import { Link } from 'react-router-dom'

const Home: FC = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <Link to="/cities">Cities</Link>
      <Link to="/weather/city">Weather</Link>
    </div>
  )
}

export default Home
