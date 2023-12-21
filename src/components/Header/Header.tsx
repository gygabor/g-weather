import routes from '@src/constants/routes'
import { FC } from 'react'
import { HeaderContainer } from './styles'
import { useLocation, useNavigate } from 'react-router'
import CustomIconButton from '../CustomIconButton'

const Header: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const isVisible = () =>
    location.pathname === routes.WEATHER || location.pathname === routes.CITIES

  const onClick = () => {
    navigate(routes.ROOT)
  }

  return (
    <HeaderContainer>
      {isVisible() && (
        <CustomIconButton
          iconType="chevronLeft"
          color="secondary"
          onClick={onClick}
        />
      )}
    </HeaderContainer>
  )
}

export default Header
