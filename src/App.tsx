import React, { FC } from 'react'
import Router from './services/Router'
import { Provider } from 'react-redux'
import store from './services/store'

const App: FC = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router />
      </Provider>
    </React.StrictMode>
  )
}

export default App
