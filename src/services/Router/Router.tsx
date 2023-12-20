import { FC } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from '@src/constants/routes'
import Cities from '@src/pages/Cities'
import Weather from '@src/pages/Weather'
import Home from '@src/pages/Home'

const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <Home />,
  },
  {
    path: routes.CITIES,
    element: <Cities />,
  },
  {
    path: routes.WEATHER,
    element: <Weather />,
  },
])

const Router: FC = () => <RouterProvider router={router} />

export default Router
