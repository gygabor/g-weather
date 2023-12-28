import React, { FC, Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from '@src/constants/routes'
import Weather from '@src/pages/Weather'
import Home from '@src/pages/Home'
import RootLayout from './pages/RootLayout'
import { Skeleton } from '@mui/material'
const Cities = React.lazy(() => import('@src/pages/Cities'))

const router = createBrowserRouter([
  {
    path: routes.ROOT,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: routes.CITIES,
        element: (
          <Suspense fallback={<Skeleton variant="text" width={'100%'} />}>
            <Cities />
          </Suspense>
        ),
      },
      {
        path: routes.WEATHER,
        element: <Weather />,
      },
    ],
  },
])

const Router: FC = () => <RouterProvider router={router} />

export default Router
