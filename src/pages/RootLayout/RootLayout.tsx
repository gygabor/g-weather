import { FC } from 'react'
import { ContentContainer, RootContainer } from './styles'
import { Outlet } from 'react-router'
import Header from '@src/components/Header'

const Root: FC = () => {
  return (
    <RootContainer>
      <ContentContainer>
        <Header />
        <Outlet />
      </ContentContainer>
    </RootContainer>
  )
}

export default Root
