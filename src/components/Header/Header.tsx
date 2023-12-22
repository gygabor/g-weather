import routes from '@src/constants/routes'
import { FC } from 'react'
import { HeaderContainer, HeaderIcon } from './styles'
import { useLocation, useNavigate } from 'react-router'

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
        <HeaderIcon
          className="header-icon"
          iconType="chevronLeft"
          color="secondary"
          onClick={onClick}
          size="medium"
        />
      )}
    </HeaderContainer>
  )
}

export default Header
