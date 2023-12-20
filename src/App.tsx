import React, { FC } from 'react'
import Router from './Router'
import { Provider } from 'react-redux'
import store from '@src/services/store'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './constants/theme'
import { CssBaseline } from '@mui/material'

const App: FC = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  )
}

export default App
