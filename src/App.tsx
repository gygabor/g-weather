import { FC } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './constants/routes'
import Cities from './pages/Cities'
import Weather from './pages/Weather'
import Home from './pages/Home'

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

const App: FC = () => <RouterProvider router={router} />

export default App
